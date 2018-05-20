import React from 'react';
import PropTypes from 'prop-types';

import './PostImage.css';

export const PostImage = (props) => {
    PostImage.propTypes = {
        image: PropTypes.string.isRequired,
    };

    return (
        <div className="post-card__image" style={{ 'backgroundImage': `url("${props.image}")` }} />
    );
}
