import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar, Button, Input, Dropdown } from 'antd';

import './Header.css';

const menu = (
    <Menu className="menu-item__dropdown">
        <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                <Icon type="profile" className="menu-item__dropdown-icon" />Profile
            </a>
        </Menu.Item>
        <Menu.Item key="1">
            <Icon type="plus-circle-o" className="menu-item__dropdown-icon" />New post
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
            <Icon type="logout" className="menu-item__dropdown-icon" />Exit
        </Menu.Item>
    </Menu>
  );

export default class Header extends React.Component {
    render() {
        return (
            <Layout.Header className="header">
                <div className="menu-items__logo">
                    <img src="/images/logo-small.png" alt="logo" />
                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    className="menu-items__items"
                >
                    <Menu.SubMenu key="1" title={<span><Icon type="star-o" />Posts</span>}>
                        <Menu.ItemGroup key="1.1" title="Categories" className="submenu-item">
                            <Menu.Item key="1.1.1">Programming</Menu.Item>
                            <Menu.Item key="1.1.2">Website Dev</Menu.Item>
                            <Menu.Item key="1.1.3">Game Dev</Menu.Item>
                            <Menu.Item key="1.1.4">Careees in IT</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="1.2" title="Other" className="submenu-item">
                            <Menu.Item key="1.2.1">Latest</Menu.Item>
                        </Menu.ItemGroup>
                    </Menu.SubMenu>
                    <Menu.Item key="2">
                        <Icon type="user" />Users
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="bulb" />About
                    </Menu.Item>
                </Menu>
                <div className="menu-items__icons">
                    <Input.Search
                        className="menu-items__search"
                        placeholder="search . . ."
                        onSearch={value => console.log(value)}
                    />
                    <div className="menu-items__divider"></div>

                    <Dropdown overlay={menu}>
                        <span>
                            <Avatar className="menu-items__avatar" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"></Avatar>
                            <span className="menu-items__username">Bobby Casana</span>
                        </span>
                    </Dropdown>
                </div>
            </Layout.Header>
        );
    };
    
}
