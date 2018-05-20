import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar, Icon } from 'antd';

export const MenuUser = (props) => {
    MenuUser.propTypes = {
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
    };

    const { Item, Divider } = Menu;

    const menu = (
        <Menu className="menu-main__dropdown">
            <Item key="0">
                <Link to="/profile" className="menu-main__links menu-main__links--dark">
                    <Icon type="profile" className="menu-main__dropdown-icon" />Profile
                </Link>
            </Item>
            <Item key="1">
                <Link to="/create/post" className="menu-main__links menu-main__links--dark">
                    <Icon type="plus-circle-o" className="menu-main__dropdown-icon" />New post
                </Link>
            </Item>
            <Divider />
            <Item key="3">
                <Link to="/logout" className="menu-main__links menu-main__links--dark">
                    <Icon type="logout" className="menu-main__dropdown-icon" />Exit
                </Link>
            </Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <span>
                <Link to="/profile">
                    <Avatar className="menu-main__left-items" src={props.avatarUrl}></Avatar>
                    <span className="menu-main__left-items--username">{props.name} {props.surname}</span>
                </Link>
            </span>
        </Dropdown>
    );
};
