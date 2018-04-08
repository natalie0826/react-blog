import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

import { Routes } from '../Routes/Routes';
import { MainPage } from '../MainPage/MainPage';
import MenuMain from '../MenuMain/MenuMain';

const { Content, Footer } = Layout;

export const App = () => {
  return (
    <Router>
      <Layout className="layout">
          <MenuMain />
          <Routes />
          <Content style={{ padding: '0 50px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <MainPage />
          </Content>
          
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
      </Layout>
    </Router>
  );
}
