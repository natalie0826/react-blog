import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Icon, Layout, Menu, Spin } from 'antd';

import ProfileMenu from '../partials/ProfileMenu/ProfileMenu';
import { Routes } from '../Routes/Routes';
import { MenuMainContainer } from '../../containers/MenuMainContainer';
import { Footer } from '../partials/Footer/Footer';

import './App.css';

const { SubMenu, Item, ItemGroup } = Menu;
const { Content, Sider } = Layout;

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      collapsed: false,
    };
  }

  capitalize = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.loadCategories();
  }

  componentDidUpdate() {
    if(this.props.categories.size > 1) {
      this.props.categories.map(category => this.props.fetchPosts(category.get('id')));
    }
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    const loading = <Spin />
    const categories = this.props.categories.size > 1 && this.props.categories.map(category =>
            // <MenuItem linkTo={`/categories/${category.get('name')}`}  key={`1.1.${category.get('id')}`} text={category.get('name')} />
            <Item key={`1.1.${category.get('id')}`}>
                <Link to={`/categories/${category.get('id')}`} className="menu-main__links menu-main__links--light">
                    {this.capitalize(category.get('name'))}
                </Link>
            </Item>
        );

    return (
      <Router>
        <div>
          <Layout className="layout" style={{ minHeight: '100vh' }}>
            {this.props.profileStatus && <ProfileMenu />}
            <Layout>
              {this.props.isLoading ? loading : <MenuMainContainer categories={categories} />}
              <Content style={{ padding: '30px 50px', background: 'rgba(240, 240, 240, 0.85)' }}>
                <Routes />
              </Content>
            </Layout>
          </Layout>
          <Layout>
            <Footer />
          </Layout>
        </div>
      </Router>
    );
}
}
