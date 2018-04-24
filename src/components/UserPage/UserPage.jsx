import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Divider, Button, Tag, message  } from 'antd';
import { Menu, Icon, Popconfirm } from 'antd';

import { Layout, Breadcrumb } from 'antd';
import { PostHorizontal } from '../PostsPreview/PostHorizontal/PostHorizontal';

import './UserPage.css';
const { Header, Content, Sider } = Layout;


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleted: false,
            isDeletedSecond: false
        }
    }

    componentDidMount() {
        this.props.beInProfile();
    }

    componentWillUnmount() {
        this.props.beInProfile();
    }

    confirm = (e) => {
        console.log('confirn', e.target.value);
        message.success('Click on Yes');
        this.setState({'isDeleted': true});
      }
      
    cancel = (e) => {
        console.log(e);
        message.error('Click on No');
      }


    render() {
    return (
        <div>
            
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>

            <div class="info-profile">
                <div class="violet">
                    <div class="violet-img" style={{'backgroundImage': 'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d43ec18ec2cf6ff854513b9e8395c1e&auto=format&fit=crop&w=750&q=80")' }}>
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
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1522204709263-68a23e3937c2?ixlib=rb-0.3.5&s=c4d559791c264444e3f59efa39e9190b&auto=format&fit=crop&w=750&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1514929781313-76fcbb2136b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a7842f8302f4b1aec883bb028720f82&auto=format&fit=crop&w=334&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1502586297919-01c3b807044e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=912685ab0db19962204873362236ffbc&auto=format&fit=crop&w=332&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495042990048-eca42e955792?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a74004719724e78652e97bc5958e871f&auto=format&fit=crop&w=750&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1485893226355-9a1c32a0c81e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=40192d45e7b6ee2b8cf2ffd5a06be880&auto=format&fit=crop&w=500&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c90ef12b4dc22a4a4c277dd056dd0b7e&auto=format&fit=crop&w=750&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1400&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&s=d6aa3148589eba801d466a21c6847255&auto=format&fit=crop&w=750&q=80')" }}></div>
                        <div className="following-person-avatar" style={{ 'backgroundImage': "url('https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=947c49758750ddb0754857f1fa3895a1&auto=format&fit=crop&w=334&q=80')" }}></div>
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
                {!this.state.isDeleted && 
            <div className="post-horizontal-container">
                <div className="post-horizontal-image" style={{ 'backgroundImage': 'url("https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-0.3.5&s=56f62ac759295d695dd71968a3898038&auto=format&fit=crop&w=1350&q=80")' }}>
                    <div className="manage-post">
                        <Link to="/post/12/edit">
                            <Button shape="circle" icon="edit" style={{'marginRight': '10px'}} />
                        </Link>
                        <Popconfirm title="Are you sure delete this post?" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
                            <Button shape="circle" icon="delete" />
                        </Popconfirm>
                    </div>
                </div>
                <div className="post-horizontal">
                    <h1 className="post-horizontal-title">Everything You Need to Know About Painting Your House, Except for How to Do It</h1>
                    <div className="info__subtitle">
                        <span>Bobby Cassana</span>
                        <span> - </span>
                        <span className="info__subtitle--light">15 jul 2018</span>
                    </div>
                    <hr className="info__divider" />
                    <p className="info__text info__text-no-margin">The publisher invested $35 million in Ubisoft Winnipeg hiring people, who can help build new tech to improve Ubisoft’s world-building tech.</p>
                    <Divider />
                    <div className="info__footer info__footer-margin">
                        <span className="info__comments">
                            <Icon type="message" />5 comments
                        </span>
                        <span className="info__time-read">
                            <Icon type="dashboard" />3 minutes read
                        </span>
                    </div>
                </div>
            </div>
    }
                {!this.props.isDeletedSecond &&
            <div className="post-horizontal-container">
                <div className="post-horizontal-image" style={{ 'backgroundImage': 'url("https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a034088c9404865910b97a6cf6b757ae&auto=format&fit=crop&w=755&q=80")' }}>
                <div className="manage-post">
                        <Link to="/post/12/edit">
                            <Button shape="circle" icon="edit" style={{'marginRight': '10px'}} />
                        </Link>
                        <Popconfirm title="Are you sure delete this post?" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
                            <Button shape="circle" icon="delete" />
                        </Popconfirm>
                    </div>
                    </div>
                <div className="post-horizontal">
                    <h1 className="post-horizontal-title">Everything You Need to Know About Painting Your House, Except for How to Do It</h1>
                    <div className="info__subtitle">
                        <span>Bobby Cassana</span>
                        <span> - </span>
                        <span className="info__subtitle--light">15 jul 2018</span>
                    </div>
                    <hr className="info__divider" />
                    <p className="info__text info__text-no-margin">The publisher invested $35 million in Ubisoft Winnipeg hiring people, who can help build new tech to improve Ubisoft’s world-building tech.</p>
                    <Divider />
                    <div className="info__footer info__footer-margin">
                        <span className="info__comments">
                            <Icon type="message" />5 comments
                        </span>
                        <span className="info__time-read">
                            <Icon type="dashboard" />3 minutes read
                        </span>
                    </div>
                </div>
            </div>
        }
             </Col>
         </Row>
         </div>
    );
}
};
