import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import { MenuItems } from './MenuItems/MenuItems';
import { MenuSearch } from './MenuSearch/MenuSearch';
import { MenuUser } from './MenuUser/MenuUser';

import './MenuMain.css';

const { Header } = Layout;

export default class MenuMain extends React.Component {
    render() {
        return (
            <Header className="menu-main">
                <div className="menu-main__logo">
                    <Link to="/">
                        <img src="/images/logo-small.png" alt="logo" />
                    </Link>
                </div>

                <MenuItems />
                
                <div className="menu-main__left">
                    <MenuSearch />
                    <div className="menu-main__divider"></div>
                    <MenuUser />
                </div>
            </Header>
        );
    };
}
