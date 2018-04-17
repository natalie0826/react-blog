import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export const MenuLogin = () => {
    return (
        <Link to="/profile">
            <Button shape="circle" icon="login" size="large" className="menu-main__left-items" />
            <span className="menu-main__left-items--username">Login</span>
        </Link>
    );
};
