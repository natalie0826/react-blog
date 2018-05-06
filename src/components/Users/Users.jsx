import React from 'react';
import { Button, Divider, Icon, Select, Radio  } from 'antd';

import './Users.css';
import { PostOverlay } from '../PostsPreview/PostOverlay/PostOverlay';

const Option = Select.Option;

export const Users = () => {
    // handleSizeChange = (e) => {
    //     this.setState({ size: e.target.value });   
    // }

    // function handleChange(value) {
    //     console.log(`selected ${value}`);
    // }

    return (
        <div className="users-page">
            <div className="users-sort">
                <div className="sort">
                    <span>Sort by date: </span>
                    <Radio.Group value="default" /*onChange={this.handleSizeChange}*/>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                </div>
                <div className="sort">
                    <span>Sort by: </span>
                    <Select defaultValue="lucy" style={{ width: 120 }} /*onChange={handleChange}*/>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>Disabled</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
            </div>
            <div className="users">
                <div className="user-container">
                    <div className="user-info">
                        <div className="post-author">
                            <div className="author-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                            <div className="author-description">
                                <div>
                                    <h2 className="description-name">Pina Chaudhary</h2>
                                    <Button type="primary" style={{ 'padding': '-1px 15px 0 15px', 'marginLeft': '15px', 'fontSize': '.9em', 'height': '26px' }}>Follow</Button>
                                </div>
                                <h3 className="user-profession">Art-director of Wargaming</h3>
                                <hr className="info__divider" style={{'width': '40%'}} />
                                <h4 className="user-date-start">Date of starting: 12 March 2018</h4>
                                <h4 className="user-followers">Followers: 11</h4>
                            </div>
                        </div>
                    </div>
                    <div className="user-posts">
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="user-container">
                    <div className="user-info">
                        <div className="post-author">
                            <div className="author-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                            <div className="author-description">
                                <div>
                                    <h2 className="description-name">Pina Chaudhary</h2>
                                    <Button type="primary" style={{ 'padding': '-1px 15px 0 15px', 'marginLeft': '15px', 'fontSize': '.9em', 'height': '26px' }}>Follow</Button>
                                </div>
                                <h3 className="user-profession">Art-director of Wargaming</h3>
                                <hr className="info__divider" style={{'width': '40%'}} />
                                <h4 className="user-date-start">Date of starting: 12 March 2018</h4>
                                <h4 className="user-followers">Followers: 11</h4>
                            </div>
                        </div>
                    </div>
                    <div className="user-posts">
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="user-container">
                    <div className="user-info">
                        <div className="post-author">
                            <div className="author-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                            <div className="author-description">
                                <div>
                                    <h2 className="description-name">Pina Chaudhary</h2>
                                    <Button type="primary" style={{ 'padding': '-1px 15px 0 15px', 'marginLeft': '15px', 'fontSize': '.9em', 'height': '26px' }}>Follow</Button>
                                </div>
                                <h3 className="user-profession">Art-director of Wargaming</h3>
                                <hr className="info__divider" style={{'width': '40%'}} />
                                <h4 className="user-date-start">Date of starting: 12 March 2018</h4>
                                <h4 className="user-followers">Followers: 11</h4>
                            </div>
                        </div>
                    </div>
                    <div className="user-posts">
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                    </div>
                </div>
                <Divider />
                <div className="user-container">
                    <div className="user-info">
                        <div className="post-author">
                            <div className="author-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                            <div className="author-description">
                                <div>
                                    <h2 className="description-name">Pina Chaudhary</h2>
                                    <Button type="primary" style={{ 'padding': '-1px 15px 0 15px', 'marginLeft': '15px', 'fontSize': '.9em', 'height': '26px' }}>Follow</Button>
                                </div>
                                <h3 className="user-profession">Art-director of Wargaming</h3>
                                <hr className="info__divider" style={{'width': '40%'}} />
                                <h4 className="user-date-start">Date of starting: 12 March 2018</h4>
                                <h4 className="user-followers">Followers: 11</h4>
                            </div>
                        </div>
                    </div>
                    <div className="user-posts">
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                        <div className="user-post">
                            <PostOverlay />
                        </div>
                    </div>
                </div>
                <Divider />
            </div>
        </div>
    )
}
