import React from 'react';
import { Button, Popconfirm, notification } from 'antd';

import { api } from '../../../tools/ajax-tool';
import { BASE_URL } from '../../../constants/urls';

import { CommentCreateContainer } from '../../../containers/CommentCreateContainer';

import './Comment.css';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleCommentForm: false,
            isDeleted: false,
            previousId: null
        }
    }

    showCommentCreateForm = () => {
        this.setState((prevState, props) => { return {visibleCommentForm: !prevState.visibleCommentForm }});
        this.setState({previousId: this.props.comment.id});
    }

    confirm = (e) => {
        console.log('confirn', e.target.value);
        api
            .delete(`${BASE_URL}/comments/${this.props.comment.id}`)
            .then(res => {
                if (res.data.status === false) {
                    this.openNotificationWithIcon('error', 'Please, try again. Something goes wrong.');
                    // dispatch(deleteCommentFailure(res.data.message));
                } else {
                    this.openNotificationWithIcon('success', 'Congratulations! Your comment has been successfully deleted.');
                    this.props.fetchComments();
                    // dispatch(deleteCommentSuccess(id));
                }
            })
            .catch(error => {
                this.openNotificationWithIcon('error', 'Please, try again. Something goes wrong.')
                // dispatch(deleteCommentFailure(error))
            });
        this.setState({'isDeleted': true});
    }

    openNotificationWithIcon = (type, text) => {
        notification[type]({
            message: 'Comment delete status',
            description: text,
        });
    };

    cancel = (e) => {
        console.log(e);
    }

    render() {
        console.log('comment received', this.props.comment);

        const {
            comment
        } = this.props;

        return (
            <ul class="comment">
                <li class="text-justify">
                    <div class="comment-body">
                        <img src="http://via.placeholder.com/60x60" alt="user" class="img-responsive img-user" />
                        {/* *ngIf="userId === comment.userId && !comment.isDeleted" */}
                        {/* (click)="openDialogDelete(comment.id, comment.postId) */}
                        <a class="comment-remove">
                            {this.props.isAuth &&
                            <Popconfirm title="Are you sure delete this post?" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
                                <Button shape="circle" icon="delete" />
                            </Popconfirm>}
                        </a>
                        <div class="comment-info">
                            <span class="comment-author">{comment.author}</span>
                            {comment.prevAuthor && <span>&nbsp;to&nbsp;</span>}
                            {comment.prevAuthor && <span  class="comment-author">{comment.prevAuthor}</span>}
                            <span class="comment-date">&nbsp;{comment.dateUpdate}</span>
                            {/* *ngIf="!comment.isDeleted" */}
                            {comment.isDeleted || this.state.isDeleted
                                ? <p class="comment-info-text comment-deleted">This comment has been removed by author.</p>
                                : <p class="comment-info-text">{comment.text}</p>
                            }
                            {this.props.isAuth && <button class="comment-reply" onClick={this.showCommentCreateForm}>Reply</button>}
                            {this.state.visibleCommentForm && <CommentCreateContainer postId={this.props.postId} previousId={this.state.previousId} />}
                            {/* <app-comment-create *ngIf="isShown" [previousCommentId]="comment.id" [userId]="userId" [postId]="comment.postId"></app-comment-create> */}
                        </div>
                    </div>
                    <ul>
                        {comment.children && comment.children.length && comment.children.map(child => {
                            return <Comment key={child.id} comment={child} />
                        })}
                    </ul>
                </li>
            </ul>
        )
    }
}
