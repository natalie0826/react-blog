import React from 'react';

import './Comment.css';

export default class Comment extends React.Component {
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
                            <span>Remove</span>
                        </a>
                        <div class="comment-info">
                            <span class="comment-author">{comment.author}</span>
                            {/* *ngIf="comment.previousId" */}
                            <span >to </span>
                            {/* *ngIf="comment.previousId" */}
                            <span  class="comment-author">PrevAuthor</span>
                            <span class="comment-date">DATE comment</span>
                            {/* *ngIf="!comment.isDeleted" */}
                            <p class="comment-info-text">{comment.text}</p>
                             {/* *ngIf="comment.isDeleted" */}
                            {/* <p class="comment-info-text comment-deleted">This comment has been removed by author.</p> */}
                            {/* *ngIf="userId && !comment.isDeleted" (click)="showFormComment()" */}
                            <button class="comment-reply">Reply</button>
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
