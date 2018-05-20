import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const { Item } = Menu;

export const MenuItem = (props) => {
    MenuItem.propTypes = {
        key: PropTypes.string.isRequired,
        linkTo: PropTypes.string,
        text: PropTypes.string.isRequired,
    }

    return (
        <Item key={props.key}>
            <Link to={props.linkTo} className="menu-main__links menu-main__links--light">
                {props.text}
            </Link>
        </Item>
    )
}

MenuItem.defaultProps = {
    linkTo: '/'
};
