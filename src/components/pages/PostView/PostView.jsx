import React from 'react';
import PropTypes from 'prop-types';
import { OrderedMap } from 'immutable';
import { Link } from 'react-router-dom';
import { Row, Col, Icon, Button, Tooltip, Tag, Divider } from 'antd';

import { VerticalGrid } from '../../partials/VerticalGrid/VerticalGrid';
import { CommentCreateContainer } from '../../../containers/CommentCreateContainer';
import { CommentListContainer } from '../../../containers/CommentListContainer';

import './PostView.css';

export default class PostView extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        posts: PropTypes.instanceOf(OrderedMap).isRequired,
    }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll, false);
    // }
    //
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll, false);
    // }

    findPostById = (posts, id) => {
        let foundPost;
        posts.map(postByCategory =>
            postByCategory.get('posts').filter(post => {
                if (post.get('id') === id) {
                    foundPost = post;

                    return post;
                }
            }));

        return foundPost;
    }

    handleScroll = () => {
        const postActions = document.getElementById('actions');
        const sticky = postActions.offsetTop;

        if (window.pageYOffset >= sticky && window.pageYOffset > 600) {
            postActions.classList.add("sticky");
        } else {
            postActions.classList.remove("sticky");
        }
    }

    render() {
        const postId = parseInt(this.props.match.params.id, 10);
        const currentPost = this.findPostById(this.props.posts, postId);
        const authorImage = 'url("' + currentPost.get('authorImg') + '")';
        const postImage = 'url("' + currentPost.get('imageUrl') + '")';

        return (
            <Row gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}>
                <div className="post-container">
                    <div className="post">
                        <div>
                            <h5 className="post-category" style={{ 'color': '#673AB7' }} >{ currentPost.get('category') }</h5>
                            <h1 className="post-title">{ currentPost.get('title') }</h1>
                            <h4 className="post-subtitle">{ currentPost.get('subtitle') }</h4>
                        </div>
                        <div className="post-author">
                            <div className="author-avatar" style={{ 'backgroundImage': authorImage }} />
                            <div className="author-description">
                                <div>
                                    <span className="description-name">{ currentPost.get('author') }</span>
                                    <Button type="dashed" style={{ 'padding': '-1px 15px 0 15px', 'marginLeft': '15px', 'fontSize': '.9em', 'height': '26px' }}>Follow</Button>
                                </div>
                                <div>
                                    <span className="description-date">{ currentPost.get('dateUpdate') }</span>
                                    <Icon type="eye-o" style={{ 'color': '#a5a5a5' }} />
                                    <span className="description-minutes">15 minutes read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-image" style={{ 'backgroundImage': postImage }} />
                </div>
                <div className="post-text-container">

                    <div className="post-text">{ currentPost.get('text') }</div>
                    <Divider />
                    <div className="post-additional">
                        <div className="post-author post-author__flex">
                            <div className="author-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }} />
                            <div className="author-description">
                                <div>
                                    <span className="description-name">{ currentPost.get('author') }</span>
                                    <Button type="dashed" style={{ 'padding': '-1px 15px 0 15px', 'marginLeft': '15px', 'fontSize': '.9em', 'height': '26px' }}>Follow</Button>
                                </div>
                                <div>
                                    <span className="description-date">{ currentPost.get('dateUpdate') }</span>
                                    <Icon type="eye-o" style={{ 'color': '#a5a5a5' }} />
                                    <span className="description-minutes">15 minutes read</span>
                                </div>
                            </div>
                        </div>
                        <div className="post-tags">
                            {currentPost.get('tags').map((tag, index) => <Tag color="#673ab7" key={index}>#{tag}</Tag>)}
                        </div>
                    </div>
                </div>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="post-text-container heading-container">
                        <Divider>
                            <h2 className="heading">Similiar posts</h2>
                        </Divider>
                    </div>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <VerticalGrid posts={this.props.posts.getIn([-1, 'posts']).filter((post, index) => index < 4)} columns={4} />
                        </Col>
                    </Row>
                </Col>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="post-text-container heading-container">
                            <Divider>
                                <h2 className="heading">Comments</h2>
                            </Divider>
                            <CommentCreateContainer postId={postId} />
                            <CommentListContainer postId={postId} />
                        </div>

                        {/* <h3 *ngIf="!hasAnyComments">There are no comments. Be first!</h3> */}
                        {/* <div *ngIf="hasAnyComments"> */}
                        <div>
                            {/* <app-comment-view *ngFor="let comment of comments" [comment]="comment" [userId]="userId" (reply)="reply($event)"></app-comment-view> */}
                            {/* <ul class="comment">
                                <li class="text-justify">
                                    <div class="comment-body">
                                        <img src="http://via.placeholder.com/60x60" alt="user" class="img-responsive img-user">
                                        <a class="comment-remove" *ngIf="userId === comment.userId && !comment.isDeleted" (click)="openDialogDelete(comment.id, comment.postId)">
                                            <span class="glyphicon glyphicon-remove"></span>
                                        </a>
                                        <div class="comment-info">
                                            <span class="comment-author">{{comment.author}}</span>
                                            <span *ngIf="comment.previousId">to </span>
                                            <span *ngIf="comment.previousId" class="comment-author">{{comment.prevAuthor}}</span>
                                            <span class="comment-date">{{comment.dateUpdate | relativeDate}}</span>
                                            <p class="comment-info-text" *ngIf="!comment.isDeleted">{{comment.text}}</p>
                                            <p class="comment-info-text comment-deleted" *ngIf="comment.isDeleted">This comment has been removed by author.</p>
                                            <button class="comment-reply" *ngIf="userId && !comment.isDeleted" (click)="showFormComment()">Reply</button>
                                            <app-comment-create *ngIf="isShown" [previousCommentId]="comment.id" [userId]="userId" [postId]="comment.postId"></app-comment-create>
                                        </div>
                                    </div>
                                    <ul *ngIf="comment.children">
                                        <app-comment-view *ngFor="let comment of comment.children" [userId]="userId" [comment]="comment"></app-comment-view>
                                    </ul>
                                </li>
                            </ul> */}
                        </div>
                    </Col>
                </Row>
            </Row>
        );
    }
};
