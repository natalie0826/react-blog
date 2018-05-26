import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PostHeader } from '../../common/PostHeader/PostHeader';

import './PostOverlay.css';

export const PostOverlay = (props) => {
    PostOverlay.propTypes = {
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
        date: PropTypes.string,
    };

    return (
        <Link to={`/post/${props.id}`} style={{ textDecoration: 'none' }}>
            <div className="post-img">
              <div className="post-img__wrapper">
                  <div className="post-img__overlay" />
                  <div className="image-slider">
                    <div className="image">
                      <img src={props.image} alt={props.title} />
                    </div>
                  </div>
                  <PostHeader
                    overImage
                    title={props.title}
                    author={props.author}
                    date={props.date}
                  />
              </div>
            </div>
        </Link>
    );
}

PostOverlay.defaultProps = {
    author: null,
    date: null
}
