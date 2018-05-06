import React from 'react';
import PropTypes from 'prop-types';

import './PostText.css';

export const PostText = (props) => {
    // PostText.propTypes = {
    //     text: PropTypes.string.isRequired,
    // }

    return (
        <div>
            <hr className="info__divider" />
            <p className="info__text info__text-no-margin">The publisher invested $35 million in Ubisoft Winnipeg hiring people, who can help build new tech to improve Ubisoft’s world-building tech.</p>
        </div>
    )
}
