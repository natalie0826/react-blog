import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { Home } from '../Home/Home';
import PostView from '../PostView/PostView';
import { PostEditor } from '../PostEditor/PostEditor';
import UserPage from '../UserPage/UserPage';
import MainPage from '../MainPage/MainPage';
import { MenuMainContainer } from '../../containers/MenuMainContainer';

import { Col, Row, Divider, Button, Tag } from 'antd';
import { Menu, Icon } from 'antd';

import { Breadcrumb } from 'antd';

const { Header, Sider } = Layout;


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { Content, Footer } = Layout;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    collapsed: false,
  };
}
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
  return (
    <Router>
      <div>
     

          <Layout className="layout" style={{ minHeight: '100vh' }}>
          <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" style={{ 'height': '64px', 'backgroundColor': '#673ab7' }} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="setting" />
              <span>Edit my profile</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="bulb" />
              <span>Open plan dashboard</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="dashboard" />
              <span>Create new post</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="star" />
              <span>View created posts</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="profile" />
              <span>View followers</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <MenuMainContainer />
          <Content style={{ padding: '30px 50px', background: 'rgba(240, 240, 240, 0.85)' }}>
            <Switch>
              <Route path="/" exact strict component={MainPage} />
              <Route path="/post/:id" strict component={PostView} />
              <Route path="/profile" strict component={UserPage} />
              <Route path="/post/create" render={PostEditor} />
              <Route path="/post/:id/edit" render={PostEditor} />
            </Switch>
          </Content>
          </Layout>
          </Layout>
          <Layout>
          <Footer style={{ textAlign: 'center' }}>
            MORE
          </Footer>
      </Layout>
    </div>
    </Router>
  );
}
}
