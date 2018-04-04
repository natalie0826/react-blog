import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

export const MenuItems = () => {
    const { SubMenu, Item, ItemGroup } = Menu;

    return (
        <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            className="menu-main__items"
        >
            <SubMenu key="1" title={<span><Icon type="star-o" />Posts</span>}>
                <ItemGroup key="1.1" title="Categories" className="submenu-item">
                    <Item key="1.1.1">
                        <Link to="/categories/programming" className="menu-main__links menu-main__links--light">
                            Programming
                        </Link>
                    </Item>
                    <Item key="1.1.2">
                        <Link to="/categories/website-dev" className="menu-main__links menu-main__links--light">
                            Website Dev
                        </Link>
                    </Item>
                    <Item key="1.1.3">
                        <Link to="/categories/game-dev" className="menu-main__links menu-main__links--light">
                            Game Dev
                        </Link>
                    </Item>
                    <Item key="1.1.4">
                        <Link to="/categories/carees-in-it" className="menu-main__links menu-main__links--light">
                            Careees in IT
                        </Link>
                    </Item>
                </ItemGroup>
                <ItemGroup key="1.2" title="Other" className="submenu-item">
                    <Item key="1.2.1">
                        <Link to="/feed" className="menu-main__links menu-main__links--dropdown">
                            Latest
                        </Link>
                    </Item>
                </ItemGroup>
            </SubMenu>
            <Item key="2">
                <Link to="/users" className="menu-main__links">
                    <Icon type="user" />Users
                </Link>
            </Item>
            <Item key="3">
                <Link to="/about" className="menu-main__links">                
                    <Icon type="bulb" />About
                </Link>
            </Item>
        </Menu>
    );
};
