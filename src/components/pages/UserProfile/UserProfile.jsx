import React from 'react';
import { Button, Icon, Tabs, Spin } from 'antd';
import { PostCard } from '../../partials/PostCard/PostCard';

import { api } from '../../../tools/ajax-tool';
import { BASE_URL } from '../../../constants/urls';

import './UserProfile.css';

const TabPane = Tabs.TabPane;

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true,
            posts: [],
            loadingPosts: true
        }
    }

    componentDidMount() {
        const url = `${BASE_URL}/users`
        this.setState({ loading: true });
        api
        .get(url)
        .then(res => {
            if (res.data.status === false) {
                console.log('failure', res.data.message);
                // dispatch(fetchCommentsByPostFailure(res.data.message, postId));
            } else {
                console.log('COMMENTS', res.data);
                res.data.map(user => user.avatarUrl = 'url("' + user.avatarUrl + '")');
                this.setState({ users: res.data[0], loading: false });
                // dispatch(fetchCommentsByPostSuccess(postId, res.data));
            }
        })
        .catch(error => {
            console.log('failure', error);
            // dispatch(fetchCommentsByPostFailure(error, postId));
        });

        const postsUrl = `${BASE_URL}/posts`
    this.setState({ loadingPosts: true });
        api
        .get(postsUrl)
            .then(res => {
                if (res.data.status === false) {
                    console.log('failure', res.data.message);
                    // dispatch(fetchCommentsByPostFailure(res.data.message, postId));
                } else {
                    console.log('COMMENTS', res.data);
                    this.setState({ posts: res.data.rows, loadingPosts: false });
                    // dispatch(fetchCommentsByPostSuccess(postId, res.data));
                }
            })
            .catch(error => {
                console.log('failure', error);
                // dispatch(fetchCommentsByPostFailure(error, postId));
            });
        }

  render() {
      const { users } = this.state;
    return (
        this.state.loaing ? <Spin /> :
      <div class="user-profile">
        <div class="user-profile-background">
          <div class="avatar" style={{'backgroundImage': users.avatarUrl }}>
          </div>
        </div>
        <div className="user-profile-description">
          <div className="user-profile-info">
              <h2 className="user-profile-title user-profile-title--capitalize">{users.name} {users.surname}</h2>
              <h3 className="user-profile-profession">{users.job}</h3>
              <div className="spacer user-profile-statistics">
                <div className="spacer-section">
                  <Icon type="star-o" style={{ 'fontSize': '1.2em', 'marginRight': '10px', 'color': '#2e1954' }} />
                  <h4 className="user-profile-date-start">128 posts</h4>
                </div>
                <div className="spacer-section">
                  <Icon type="team" style={{ 'fontSize': '1.2em', 'marginRight': '10px', 'color': '#2e1954' }} />
                  <h4 className="user-profile-followers">11 followers</h4>
                </div>
              </div>
              <Button type="primary" style={{ 'padding': '5px 30px 5px 30px', 'fontSize': '1em' }}>FOLLOW</Button>
          </div>
        </div>
        <div className="personal-info">
          <h2 className="user-profile-title">Personal Info</h2>
          <p className="personal-info-description">{users.interestedIn}</p>
          <Tabs defaultActiveKey="2" size="large">
            <TabPane tab={<span><Icon type="star-o" />Posts</span>} key="1">
                {this.state.posts.map((post, index) =>

                  <PostCard
                      isHorizontal
                      showMeta
                      key={post.id}
                      id={post.id}
                      image={post.imageUrl}
                      comments={post.comments}
                      author={post.author}
                      date={post.dateUpdate}
                      title={post.title}
                  />)}
            </TabPane>
            <TabPane tab={<span><Icon type="team" />Followers</span>} key="2">
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
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
