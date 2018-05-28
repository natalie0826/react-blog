import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { PostMeta } from '../../common/PostMeta/PostMeta';
import { PostText } from '../../common/PostText/PostText';
import { PostHeader } from '../../common/PostHeader/PostHeader';
import { PostImageContainer } from '../../../containers/PostImageContainer';

import './PostCard.css';

export const PostCard = (props) => {
    PostCard.propTypes = {
        isHorizontal: PropTypes.bool,
        isShort: PropTypes.bool,
        showButtons: PropTypes.bool,
        id: PropTypes.number.isRequired,
        author: PropTypes.string,
        date: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        comments: PropTypes.number,
        minutes: PropTypes.number,
        title: PropTypes.string.isRequired,
        height: PropTypes.number,
        showMeta: PropTypes.bool
    };

    const postCardClasses = classNames('post-card-container', {
        'post-card-container--horizontal': props.isHorizontal
    });

    const redirectLink = props.showButtons ? '/profile' : `/post/${props.id}`;

    return (
        <Link to={redirectLink} style={{ textDecoration: 'none' }}>
            <div className={postCardClasses}>
                {props.image &&
                    <div className="post-card__image-container" style={{'minHeight': `${props.height}px` }}>
                        <PostImageContainer image={props.image} showButtons={props.showButtons} id={props.id} />
                    </div>
                }
                <div className="post-card">
                    <PostHeader
                        title={props.title}
                        date={props.date}
                        author={props.author}
                    />
                    {!props.isShort && <PostText text={props.text} />}
                    {props.showMeta && <PostMeta comments={props.comments} minutes={props.minutes} />}
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
    height: 250,
    showMeta: false,
    author: "Ivanna",
    isShort: false,
    date: '',
    showButtons: false
};
