import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-toggle-button';

import '../../styles/todo.css';

export default class Filter extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        isVisible: PropTypes.bool
    };

    static defaultProps = {
        isVisible: true
    }

    constructor(props) {
        super(props);
        this.state = {
            value: true
        };
    }

    handleChange = (value) => {
        this.setState({value: !value});
        value ? this.props.onClick('SHOW_ALL') : this.props.onClick('SHOW_ACTIVE');
    }

    render() {
        return (
            this.props.isVisible &&
            <div className="filter">
                <span className="filter-hint">Show tasks in progress</span>
                <ToggleButton   value={ this.state.value }
                                onToggle={(value) => this.handleChange(value)} />
            </div>
        );
    }
};
