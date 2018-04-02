import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import './Header.css';

export const Header = () => {
    return (
        <Layout.Header className="header">
            <img className="logo" src="/images/logo-small.png" alt="logo" />
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
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
        </Layout.Header>
    )
}
