import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './PostHeader.css';

export const PostHeader = (props) => {
    PostHeader.propTypes = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    //     date: PropTypes.string.isRequired,
        overImage: PropTypes.bool
    };

    const postHeaderClasses = classNames({
        'post-img__text': props.overImage
    });

    const postTitleClasses = classNames('post-card__title', {
        'post-card__title--white': props.overImage
    });

    return (
        <div className={postHeaderClasses}>
            <h1 className={postTitleClasses}>{props.title}</h1>
            <div className="info__subtitle">
                {props.author && <span>Pina Chaudhary - </span>}
                <span className="info__subtitle--light">15 jul 2018</span>
            </div>
        </div>
    );
}

PostHeader.defaultProps = {
    title: 'bfgsbfgb',
    overImage: false,
};
