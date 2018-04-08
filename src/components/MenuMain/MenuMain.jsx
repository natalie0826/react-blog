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
                        <svg data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485.86 72">
                            <title>logo</title>
                            <path className="cls-1" d="M116.61,133.62l-14,25h-14l-14-25v39h-18v-70h19l20,37,20-37h19v70h-18Z" transform="translate(-56.61 -101.62)" />
                            <path className="cls-1" d="M401,102.62h42q10.5,0,15.25,4.75T463,122.62v9q0,8.3-2.75,12.9a13.45,13.45,0,0,1-8.75,6.1l12.5,22h-19.5l-11.5-21H419v21H401Zm44,20q0-6-6-6H419v21h20q6,0,6-6Z" transform="translate(-56.61 -101.62)" />
                            <path className="cls-1" d="M542.47,172.62H487v-70h55.5v14H505v13.5h37.5v14H505v14.5h37.5Z" transform="translate(-56.61 -101.62)" />
                            <path className="cls-1" d="M362,106.37q-16-4.75-51.23-4.75h-84q-35.27,0-51.23,4.75c-10.64,3.17-16,12.25-16,19.25v24c0,7,5.32,16.08,16,19.25s27.71,4.75,51.23,4.75h84q35.27,0,51.23-4.75c10.63-3.17,16-12.25,16-19.25v-24C378,118.62,372.65,109.53,362,106.37Zm-7.09,38.22c0,4.13-4.17,9.49-12.5,11.36s-21.71,2.8-40.13,2.8H236.5c-18.42,0-33.8-.93-42.13-2.8s-12.5-7.23-12.5-11.36V130.43c0-4.13,4.17-9.49,12.5-11.36s23.71-2.8,42.13-2.8h65.79q27.63,0,40.13,2.8c8.33,1.87,12.5,7.23,12.5,11.36Z" transform="translate(-56.61 -101.62)" />
                        </svg>
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
