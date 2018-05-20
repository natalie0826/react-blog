import React from 'react';
import PropTypes from 'prop-types';

import './PostText.css';

export const PostText = (props) => {
    PostText.propTypes = {
        text: PropTypes.string.isRequired,
    }

    return (
        <div>
            <hr className="info__divider" />
            <p className="info__text info__text-no-margin">{props.text}</p>
        </div>
    )
}
