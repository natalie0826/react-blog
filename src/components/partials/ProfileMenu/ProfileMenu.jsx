import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

export default class ProfileMenu extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    return(
      <Sider
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
          <span style={{'color':'white'}}>Create new post</span>
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
    )
  }
}
