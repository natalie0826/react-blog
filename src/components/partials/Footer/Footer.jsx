import React from 'react';
import { Layout } from 'antd';

import { socialNetworks } from '../../../constants/social-networks';

import { Icons } from '../../common/Icons/Icons';

import './Footer.css';

export const Footer = () => {
    return (
        <Layout.Footer className="footer">
            <p>The MORE Web site provides great opportunities in blogging. Here, the information is mainly related to information technology.</p>
            <p>Developed by: Chobot & Busko</p>
            <Icons content={socialNetworks} shape="circle" isCenter />
        </Layout.Footer>
    );
};
