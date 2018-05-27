import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Tabs } from 'antd';

import { Search } from './common/Search';
import { urls } from '../constants/urls';
import { notificationConstants } from '../constants/notificationConstants';
import { Loading } from '../components/Loading';
import Categories from './tabs/Categories';
import Editor from './common/Editor';
import TodoList from './tabs/TodoList';

const TabPane = Tabs.TabPane;

export default class TodoApp extends React.Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          deleted: PropTypes.bool.isRequired,
          completed: PropTypes.bool.isRequired,
          text: PropTypes.string.isRequired
        }).isRequired).isRequired,
        categories: PropTypes.arrayOf(PropTypes.shape({
            category: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        }).isRequired).isRequired,
        toggleTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        addTodo: PropTypes.func.isRequired,
        editTodo: PropTypes.func.isRequired,
        addCategory: PropTypes.func.isRequired,
        undo: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            showNotification: false,
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        this.props.fetchTodos(urls.todos)
            .then(() => this.setState({isLoading: false}))
        this.props.fetchCategories(urls.categories);
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value });
    }

    addNotification(title, level, label, timeDismiss, dismissible, id, callbackAction, callbackAdd, callbackRemove) {
        this.$notificationSystem.addNotification({
            title: title,
            level: level,
            autoDismiss: timeDismiss,
            dismissible: dismissible,
            action: {
                label: label,
                callback: () => callbackAction()
            },
            onAdd: () => callbackAdd(id),
            onRemove: () => callbackRemove(id)
        });
    }

    showDeleteNotification = (id) => {
        this.addNotification(notificationConstants.message,
            notificationConstants.type,
            notificationConstants.buttonUndo,
            10,
            false,
            id,
            this.props.undo,
            this.props.deleteTodoSuccess,
            this.props.deleteTodo);
    }

    deleteCompleted = () => {
        this.props.todos.map(todo => todo.completed ? this.props.deleteTodo(todo.id) : null);
    }

    render() {
        const {
            todos,
            categories,
            addTodo,
            addCategory
        } = this.props;

        const existCompleted = todos.some(todo => todo.completed);

        const displayElement = classNames({
            'hide-element': !existCompleted,
            'btn btn-delete-completed': true
        });

        // It isn't a state because filteredTodos can be computed by combining user
        // input in search box and todos array from props.
        const filteredTodos = todos.filter(todo => todo.text.includes(this.state.search.toLowerCase()));

        const existTodos = filteredTodos.filter(todo => !todo.deleted);

        return (
            <div>
                <h3>Todos</h3>
                <Editor form='editor-add' isAddTodo categories={categories} addTodo={addTodo} addCategory={addCategory} />


                {this.state.isLoading ? <Loading loading={this.state.isLoading} /> :
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="All tasks" key="1">
                            <br />
                            <Search updateSearch={this.updateSearch} value={this.state.search} isVisible={todos.length > 0} />
                            <TodoList   {...this.props}
                                        todos={existTodos}
                                        deleteTodo={this.showDeleteNotification}
                            />
                            <button className={displayElement} onClick={this.deleteCompleted}>Delete completed</button>
                        </TabPane>
                        <TabPane tab="Categories" key="2">
                            <br />
                            <Categories {...this.props}
                                        deleteTodo={this.showDeleteNotification}
                            />
                        </TabPane>
                    </Tabs>
                }
            </div>
        );
    }
}
