import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Divider, Button, Tag, message, Spin } from 'antd';

import { api } from '../../../tools/ajax-tool';
import { BASE_URL } from '../../../constants/urls';

import { PostCard } from '../../partials/PostCard/PostCard';

import './UserPage.css';

export default class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleted: false,
            isDeletedSecond: false,
            postsByUser: [],
            isLoadingPosts: false,
            userInfo: {}
        }
    }

    componentDidMount() {
        this.props.beInProfile();
    }

    componentWillUnmount() {
        this.props.beInProfile();
    }

    render() {
        const {
            userInfo
        } = this.props;

        const userImage = 'url("' + userInfo.get('avatarUrl') + '")';

        return (
            <div>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <div className="info-profile">
                            <div className="info-profile-avatar">
                                <div className="avatar" style={{'backgroundImage': userImage }} />
                            </div>
                            <div className="desc">
                                <h2>{userInfo.get('name')} {userInfo.get('surname')}</h2>
                                <p>
                                    {userInfo.get('interestedIn') ?
                                    userInfo.get('interestedIn') :
                                    <div>
                                        <p>Please, add info about yourself</p>
                                        <Link to="profile/edit">
                                            <Button>Add info</Button>
                                        </Link>
                                    </div>}</p>
                                {/* <div className="social-network-profile">
                                <Button size="large" shape="circle" icon="twitter" />
                                <Button size="large" shape="circle" icon="facebook" />
                                <Button size="large" shape="circle" icon="instagram" />
                                <Button size="large" shape="circle" icon="linkedin" />
                                <Button size="large" shape="circle" icon="github" />
                                <Button size="large" shape="circle" icon="google-plus" />
                            </div> */}
                        </div>
                    </div>

                    <div className="sidebar-block">
                        <p className="recent-posts__divider">
                            <span className="recent-posts__title">following</span>
                            <span className="recent-posts__divider" />
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
                    <h1>Posts that you created earlier</h1>
                    {!this.props.posts || this.props.posts.getIn([-1, 'isFetching']) !== 'finish' ? <Spin />: this.props.posts.getIn([-1, 'posts']).map(post => {
                            if (post.get('authorId') === userInfo.get('id')) {
                                return (
                                    <PostCard
                                        isHorizontal
                                        showMeta
                                        showButtons
                                        key={post.get('id')}
                                        id={post.get('id')}
                                        image={post.get('imageUrl')}
                                        text={post.get('text')}
                                        comments={post.get('comments')}
                                        author={post.get('author')}
                                        date={post.get('dateUpdate')}
                                        title={post.get('title')}
                                    />
                                )
                            } else {
                                return null;
                            }
                        }
                    )}
                </Col>
            </Row>
        </div>
    );
}
};
