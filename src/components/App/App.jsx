import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { About } from '../About/About';
import PostView from '../PostView/PostView';
import { PostEditor } from '../PostEditor/PostEditor';
import PostCreate from '../PostCreate/PostCreate';
import { UserPageContainer } from '../../containers/UserPageContainer';
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

    console.log('fdvdb', this.props);
  return (
    <Router>
      <div>
     

          <Layout className="layout" style={{ minHeight: '100vh' }}>
         {this.props.profileStatus && <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{'backgroundColor': '#673ab7' }}
        >
          <div className="logo" style={{ 'height': '64px', 'backgroundColor': '#673ab7' }} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="setting" />
              <span>Edit my profile</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="bulb" />
              <span><a href="https://todo-react-redux.firebaseapp.com/" style={{ 'color': '#ffffff' }}>Open plan dashboard</a></span>
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
        </Sider>}
        <Layout>
          <MenuMainContainer />
          <Content style={{ padding: '30px 50px', background: 'rgba(240, 240, 240, 0.85)' }}>
            <Switch>
              <Route path="/" exact strict component={MainPage} />
              <Route path="/post/:id" strict component={PostView} />
              <Route path="/profile" strict component={UserPageContainer} />
              <Route path="/create/post" component={PostCreate} />
              <Route path="/post/:id/edit" render={PostEditor} />
              <Route path="/about" strict component={About} />
            </Switch>
          </Content>
          </Layout>
          </Layout>
          <Layout>
          <Footer style={{ textAlign: 'center', 'backgroundColor': '#2e1954', 'padding': '50px 30px', 'boxShadow': '2px -3px 17px #b1afaf', 'color': 'rgba(255, 255, 255, .7)', 'fontSize': '1.2em', 'marginTop': '30px' }}>
          <p>The MORE Web site provides great opportunities in blogging. Here, the information is mainly related to information technology.</p>
      <p>Developed by: Chobot & Busko</p>
      <div className="social-network" style={{ 'width': '250px', 'justifyContent': 'space-between', 'margin': '0 auto' }}>
                        <Button shape="circle" icon="twitter" />
                        <Button shape="circle" icon="facebook" />
                        <Button shape="circle" icon="instagram" />
                        <Button shape="circle" icon="linkedin" />
                        <Button shape="circle" icon="github" />
                        <Button shape="circle" icon="google-plus" />
                    </div>
          </Footer>
      </Layout>
    </div>
    </Router>
  );
}
}
