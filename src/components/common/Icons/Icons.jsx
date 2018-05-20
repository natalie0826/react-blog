import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'antd';

import './Icons.css';

export const Icons = (props) => {
    Icons.propTypes = {
        shape: PropTypes.oneOf(['circle']),
        type: PropTypes.oneOf(['primary', 'dashed']),
        content: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        }).isRequired).isRequired,
        isCenter: PropTypes.bool
    };

    const iconsClasses = classNames('icons', {
        'icons--center': props.isCenter
    });

    return (
        <div className={iconsClasses}>
            {props.content.map(icon => <Button shape={props.shape} icon={icon.type} href={icon.link} target="_blank" key={icon.link} />)}
        </div>
    );
};

Icons.defaultProps = {
    shape: null,
    isCenter: false
};
