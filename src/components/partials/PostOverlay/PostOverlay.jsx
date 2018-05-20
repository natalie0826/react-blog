import React from 'react';
import PropTypes from 'prop-types';

import { PostHeader } from '../../common/PostHeader/PostHeader';

import './PostOverlay.css';

export const PostOverlay = (props) => {
  PostOverlay.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };

  return (
    <div className="post-img">
      <div className="post-img__wrapper">
          <div className="post-img__overlay"></div>
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
  );
}
