import React from 'react';
import PropTypes from 'prop-types';
import { PostHeader } from '../common/PostHeader/PostHeader';

import './PostOverlay.css';

export const PostOverlay = (props) => {
    return (
        <div className="post-img">
            <div className="post-img__wrapper">
                <div className="post-img__overlay"></div>
                <div className="image">
                    <img src="https://images.unsplash.com/photo-1520971081497-3aa1750677b8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=36a8afdeed4add3bcaf131b88f568fea&auto=format&fit=crop&w=750&q=80" alt="Headshot of Thomas Jefferson" />
                </div>
                <PostHeader overImage title="Chief Operating Officer" />
                {/* <div className="post-img__text">
                    <p className="post-img__text--title"></p>
                    <p className="post-img__text--date">15 JUL 2018</p>
                </div> */}
            </div>
        </div>
    );
}