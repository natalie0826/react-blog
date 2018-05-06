import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { PostMeta } from '../common/PostMeta/PostMeta';
import { PostText } from '../common/PostText/PostText';
import { PostHeader } from '../common/PostHeader/PostHeader';

import './PostCard.css';
import { PostImage } from '../common/PostImage/PostImage';

export const PostCard = (props) => {
    PostCard.propTypes = {
        isHorizontal: PropTypes.bool,
        text: PropTypes.string,
        image: PropTypes.string,
        comments: PropTypes.number,
        minutes: PropTypes.number,
        title: PropTypes.string.isRequired,
        height: PropTypes.number,
    };
    
    const postCardClasses = classNames('post-card-container', {
        'post-card-container--horizontal': props.isHorizontal
    });
    
    return (
        <Link to={`/post/${props.id}`} style={{ textDecoration: 'none' }}>
            <div className={postCardClasses}>
                {props.image &&
                    <div className="post-card__image-container" style={{'minHeight': `${props.height}px` }}>
                        <PostImage image={props.image} />
                    </div>
                }
                <div className="post-card">
                    <PostHeader title={props.title} />
                    {props.text && <PostText />}
                    {(props.comments || props.minutes) && <PostMeta comments={props.comments} minutes={props.minutes} />}
                </div>
            </div>
        </Link>
    );
}

PostCard.defaultProps = {
    isHorizontal: false,
    image: null,
    text: null,
    comments: null,
    minutes: null,
    height: '250'
};