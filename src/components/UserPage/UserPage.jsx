import React from 'react';
import { Col, Row, Divider, Button, Tag } from 'antd';
import { Menu, Icon } from 'antd';

import { Layout, Breadcrumb } from 'antd';
import { PostHorizontal } from '../PostsPreview/PostHorizontal/PostHorizontal';

import './UserPage.css';
const { Header, Content, Sider } = Layout;


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class UserPage extends React.Component {


    render() {
    return (
        <div>
            
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>

            <div class="info-profile">
                <div class="violet">
                    <div class="violet-img">
                        <img src="https://yt3.ggpht.com/a-/AJLlDp2OmdT56ZAEJ8oVqexWYWdb-N72zRBcZclW6g=s900-mo-c-c0xffffffff-rj-k-no" alt="" />
                    </div>
                </div>
                <div class="desc">
                    <h2>Саша Киреев</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure eveniet rerum natus blanditiis deserunt nemo ratione iste saepe. Voluptatibus, molestiae rem eligendi non mollitia animi cum alias enim odio culpa.</p>
                    <div className="social-network-profile">
                        <Button size="large" shape="circle" icon="twitter" />
                        <Button size="large" shape="circle" icon="facebook" />
                        <Button size="large" shape="circle" icon="instagram" />
                        <Button size="large" shape="circle" icon="linkedin" />
                        <Button size="large" shape="circle" icon="github" />
                        <Button size="large" shape="circle" icon="google-plus" />
                    </div>
                </div>
            </div>

                <div className="sidebar-block">
                    <p className="recent-posts__divider">
                        <span className="recent-posts__title">following</span>
                        <span className="recent-posts__divider"></span>
                    </p>
                    <div className="following-people">
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                    </div>
                </div>

                <div className="sidebar-block">
                    <p className="recent-posts__divider">
                        <span className="recent-posts__title">mytags</span>
                        <span className="recent-posts__divider"></span>
                    </p>
                    <div className="post-tags top-tags">
                        <Tag color="#673ab7">#natasha</Tag>
                        <Tag color="#673ab7">#frontend</Tag>
                        <Tag color="#673ab7">#horosami</Tag>
                        <Tag color="#673ab7">#flexbox</Tag>
                        <Tag color="#673ab7">#html</Tag>
                        <Tag color="#673ab7">#react</Tag>
                        <Tag color="#673ab7">#body</Tag>
                        <Tag color="#673ab7">#blog</Tag>
                        <Tag color="#673ab7">#more</Tag>
                        <Tag color="#673ab7">#programming</Tag>
                        <Tag color="#673ab7">#css</Tag>
                    </div>
                </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                <h1>Post created</h1>
                <PostHorizontal />
                <PostHorizontal />
                 <PostHorizontal />
                 <PostHorizontal />
                 <PostHorizontal />
             </Col>
         </Row>
         </div>
    );
}
};
