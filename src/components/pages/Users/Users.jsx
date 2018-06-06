import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Button, Divider, Select, Radio, Spin  } from 'antd';

import { api } from '../../../tools/ajax-tool';
import { BASE_URL } from '../../../constants/urls';

import './Users.css';
import { PostOverlay } from '../../partials/PostOverlay/PostOverlay';

const Option = Select.Option;

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true,
            posts: [],
            loadingPosts: true
        }
    }
    // handleSizeChange = (e) => {
    //     this.setState({ size: e.target.value });
    // }

    // function handleChange(value) {
    //     console.log(`selected ${value}`);
    // }

    componentDidMount() {
        const url = `${BASE_URL}/users`
        this.setState({ loading: true });
        api
        .get(url)
        .then(res => {
            if (res.data.status === false) {
                console.log('failure', res.data.message);
                // dispatch(fetchCommentsByPostFailure(res.data.message, postId));
            } else {
                console.log('COMMENTS', res.data);
                res.data.map(user => user.avatarUrl = 'url("' + user.avatarUrl + '")');
                this.setState({ users: res.data, loading: false });
                // dispatch(fetchCommentsByPostSuccess(postId, res.data));
            }
        })
        .catch(error => {
            console.log('failure', error);
            // dispatch(fetchCommentsByPostFailure(error, postId));
        });

        const postsUrl = `${BASE_URL}/posts`
this.setState({ loadingPosts: true });
        api
        .get(postsUrl)
            .then(res => {
                if (res.data.status === false) {
                    console.log('failure', res.data.message);
                    // dispatch(fetchCommentsByPostFailure(res.data.message, postId));
                } else {
                    console.log('COMMENTS', res.data);
                    this.setState({ posts: res.data.rows, loadingPosts: false });
                    // dispatch(fetchCommentsByPostSuccess(postId, res.data));
                }
            })
            .catch(error => {
                console.log('failure', error);
                // dispatch(fetchCommentsByPostFailure(error, postId));
            });
    }

    // postsByUser = (posts, id) => {
    //     let count;
    //     posts.map(post => {
    //         if(post.userId === id && count < 5) {
    //             count++;
    //             return (
    //                 <div className="user-post">
                    // <PostOverlay
                    //     key={post.id}
                    //     id={post.id}
                    //     image={post.imageUrl}
                    //     title={post.title}
                    //     author={post.author}
                    //     date={post.date}
                    // />
    //             </div>
    //             )
    //         } else {
    //             return null;
    //         }
    //     })
    // }

render() {
    return (
        <div className="users-page">
            {/* <div className="users-sort">
                <div className="sort">
                    <span>Sort by date: </span>
                    <Radio.Group value="default" /*onChange={this.handleSizeChange}>
                //         <Radio.Button value="large">Large</Radio.Button>
                //         <Radio.Button value="default">Default</Radio.Button>
                //         <Radio.Button value="small">Small</Radio.Button>
                //     </Radio.Group>
                // </div>
                // <div className="sort">
                //     <span>Sort by: </span>
                //     <Select defaultValue="lucy" style={{ width: 120 }} /*onChange={handleChange}>
                        * <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
            </div> */}
            <div className="users">
                {this.state.loading ? <Spin /> : this.state.users.map(user =>
                    <div>
                    <div className="user-container">
                        <Link to={`/user/${user.id}`}>
                        <div className="user-info">
                            <div className="post-author">
                                <div className="author-avatar" style={{ 'backgroundImage': user.avatarUrl }} />
                                <div className="author-description">
                                    <div>
                                        <h2 className="description-name">{user.name} {user.surname}</h2>
                                        {user.id % 3 === 0
                                        ?
                                            <Button type="primary" style={{ 'padding': '-1px 15px 0 15px', 'marginLeft': '15px', 'fontSize': '.9em', 'height': '26px' }}>Follow</Button>
                                        :
                                            <Button style={{ 'padding': '-1px 15px 0 15px', 'marginLeft': '15px', 'fontSize': '.9em', 'height': '26px' }}>Followed</Button>
                                        }
                                    </div>
                                    <h3 className="user-profession">{user.job}</h3>
                                    <hr className="info__divider" style={{'width': '40%'}} />
                                    <h4 className="user-date-start">День Рождения: {moment(user.birthday).format('LL')}</h4>
                                    <h4 className="user-followers">Подписчики: {Math.floor(Math.random() * (30 - 1))}</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                        {this.state.loadingPosts ? <Spin /> :
                        <div className="user-posts">
                            {this.state.posts.map(post => {
                                return parseInt(post.userId, 10) === parseInt(user.id, 10)
                                    ?
                                    <div className="user-post">
                                    <PostOverlay
                                        key={post.id}
                                        id={post.id}
                                        image={post.imageUrl}
                                        title={post.title}
                                        author={post.author}
                                        date={moment(post.dateCreate).format('LL')}
                                    />
                                </div>
                                    :
                                     null
                            })}
                        </div>
                    }
                    </div>

                    <Divider />
                </div>
                        )
                }
            </div>
        </div>
    )
}
}
