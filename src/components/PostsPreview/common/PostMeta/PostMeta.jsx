import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Icon } from 'antd';

import './PostMeta.css';

export const PostMeta = (props) => {
    PostMeta.propTypes = {
        comments: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
    };

    return (
        <div>
            <Divider />
            <div className="info__footer info__footer-margin">
                <span className="info__comments">
                    <Icon type="message" />{props.comments} comments
                </span>
                <span className="info__time-read">
                    <Icon type="dashboard" />{props.minutes} minutes read
                </span>
            </div>
        </div>
    );
}
