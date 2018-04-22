import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

import { Home } from '../Home/Home';
import PostView from '../PostView/PostView';
import { PostEditor } from '../PostEditor/PostEditor';
import { UserPage } from '../UserPage/UserPage';
import MainPage from '../MainPage/MainPage';
import { MenuMainContainer } from '../../containers/MenuMainContainer';

const { Content, Footer } = Layout;

export const App = () => {
  return (
    <Router>
      <Layout className="layout">
          <MenuMainContainer />
          <Content style={{ padding: '30px 50px', background: 'rgba(240, 240, 240, 0.85)' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Switch>
              <Route path="/" exact strict component={MainPage} />
              <Route path="/post/:id" strict component={PostView} />
              <Route path="/profile" strict render={UserPage} />
              <Route path="/post/create" render={PostEditor} />
              <Route path="/post/:id/edit" render={PostEditor} />
            </Switch>
          </Content>
          
          <Footer style={{ textAlign: 'center' }}>
            MORE
          </Footer>
      </Layout>
    </Router>
  );
}
