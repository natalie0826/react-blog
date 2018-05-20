import React from 'react';
import { Button, Icon, Tabs } from 'antd';

import './UserProfile.css';

const TabPane = Tabs.TabPane;

export default class UserProfile extends React.Component {
  render() {
    return (
      <div class="user-profile">
        <div class="user-profile-background">
          <div class="avatar" style={{'backgroundImage': 'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d43ec18ec2cf6ff854513b9e8395c1e&auto=format&fit=crop&w=750&q=80")' }}>
          </div>
        </div>
        <div className="user-profile-description">
          <div className="user-profile-info">
              <h2 className="user-profile-title user-profile-title--capitalize">Pina Chaudhary</h2>
              <h3 className="user-profile-profession">Art-director of Wargaming, 28 years</h3>
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
          <p className="personal-info-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti adipisci neque corporis voluptatibus modi voluptates consequuntur, aperiam, veritatis accusamus incidunt reprehenderit! Nulla tempore officia magnam deserunt repellat porro iste! </p>
          <Tabs defaultActiveKey="2" size="large">
            <TabPane tab={<span><Icon type="star-o" />Posts</span>} key="1">
            </TabPane>
            <TabPane tab={<span><Icon type="team" />Followers</span>} key="2">
              Tab 2
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
