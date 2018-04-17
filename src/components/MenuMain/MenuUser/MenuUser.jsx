import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar, Icon } from 'antd';

export const MenuUser = () => {
    const { Item, Divider } = Menu;

    const menu = (
        <Menu className="menu-main__dropdown">
            <Item key="0">
                <Link to="/profile" className="menu-main__links menu-main__links--dark">
                    <Icon type="profile" className="menu-main__dropdown-icon" />Profile
                </Link>
            </Item>
            <Item key="1">
                <Link to="/post/create" className="menu-main__links menu-main__links--dark">
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
                    <Avatar className="menu-main__left-items" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"></Avatar>
                    <span className="menu-main__left-items--username">Bobby Casana</span>
                </Link>
            </span>
        </Dropdown>
    );
};
