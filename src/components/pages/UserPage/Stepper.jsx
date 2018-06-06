import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Col, Row, Divider, Button, Tag, Spin, Steps, message, DatePicker, Cascader, Input , Select } from 'antd';

import { api } from '../../../tools/ajax-tool';
import { BASE_URL } from '../../../constants/urls';

import { PostCard } from '../../partials/PostCard/PostCard';

import './UserPage.css';

const Step = Steps.Step;
const Option = Select.Option;

export default class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleted: false,
            isDeletedSecond: false,
            postsByUser: [],
            isLoadingPosts: false,
            userInfo: {},
            current: 0,
            userAdditionalInfo: {
                country: [],
                job: '',
                interestedIn: '',
                birthday: '',
                vk: '',
                twitter: '',
                github: '',
                facebook: ''
            }
        }
    }

    componentDidMount() {
        this.props.beInProfile();
    }

    componentWillUnmount() {
        this.props.beInProfile();
    }

    onCityChange = (value) => {
        console.log('CITY', value);
    }

    onJobChange = value => {
        console.log('JOB', value);
    }

    onInterestsChange = value => {
        console.log('onInterestsChange', value);
    }

    onVKChange = value => {
        console.log('onVKChange', value);
    }

    onInterestsChange

    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev = () => {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    onDateChange = (date, dateString) => {
      console.log('DATE', date, dateString);
    }

    render() {
        const {
            userInfo
        } = this.props;

        const { current } = this.state;

        const userImage = 'url("' + userInfo.get('avatarUrl') + '")';

        const options = [{
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
              value: 'xihu',
              label: 'West Lake',
            }],
          }],
        }, {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            }],
          }],
        }];

        const steps = [{
            title: 'First',
            content: 'Birthday & country',
            show: <div style={{ 'display': 'flex', 'justifyContent': 'flexStart', 'flexFlow': 'column nowrap' }}>
                <p style={{'fontSize': '1.1em'}}>Select your birthday and country where you are from</p>
                <DatePicker
                    onChange={this.onDateChange}
                    format="YYYY-MM-DD"
                    disabledDate={(current) => { return current && current > moment("12-25-1995", "MM-DD-YYYY");}}
                    showTime={{ defaultValue: moment("12-25-1995", "MM-DD-YYYY") }}
                    defaultValue={moment("12-25-1995", "MM-DD-YYYY")}
                />
                <Cascader options={options} onChange={this.onCityChange} placeholder="Please select" style={{ 'marginTop': '20px' }} />
            </div>
        }, {
            title: 'Second',
            content: 'Job & interests',
            show: <div style={{ 'display': 'flex', 'justifyContent': 'flexStart', 'flexFlow': 'column nowrap' }}>
                <p style={{'fontSize': '1.1em'}}>Select your birthday and country where you are from</p>
                <Input placeholder="Type your job" onChange={this.onJobChange} />
                <Input.TextArea onChange={this.onInterestsChange} placeholder="Please, add your interests" style={{ 'marginTop': '20px' }} autosize={{ minRows: 3, maxRows: 3 }} />
            </div>
        }, {
            title: 'Third',
            content: 'Social links',
            show: <div style={{ 'display': 'flex', 'justifyContent': 'flexStart', 'flexFlow': 'column nowrap' }}>
                <p style={{'fontSize': '1.1em'}}>Select your birthday and country where you are from</p>
                <Input onChange={this.onVKChange} addonBefore="vk.com/" defaultValue="mysite" style={{ 'marginTop': '20px' }} />
                <Input onChange={this.onTwitterChange} addonBefore="twitter.com/" defaultValue="mysite" style={{ 'marginTop': '20px' }} />
                <Input onChange={this.onFacebookChange} addonBefore="facebook.com/" defaultValue="mysite" style={{ 'marginTop': '20px' }} />
                <Input onChange={this.onGitHubChange} addonBefore="github.com/" defaultValue="mysite" style={{ 'marginTop': '20px' }} />
            </div>
        }, {
            title: 'Last',
            content: 'Done',
            show: <div style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'flexFlow': 'column nowrap' }}>
                <h2>Thanks for adding info! Other users will know info about you!</h2>
            </div>
        }];

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
                                <div>
                                    {userInfo.get('interestedIn') ?
                                    userInfo.get('interestedIn') :
                                    <div>
                                        <p>Please, add info about yourself</p>
                                        <Link to="profile/edit">
                                        <Button>Add info</Button>
                                    </Link>
                                </div>}</div>
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
                    <div>
                        <h1>Dear {userInfo.get('name')}, add info about yourself!</h1>
                        <Steps current={current}>
                            {steps.map(item => <Step key={item.title} title={item.title} description={item.content} />)}
                        </Steps>
                        <div className="steps-content">{steps[this.state.current].show}</div>
                        <div className="steps-action">
                            {
                                this.state.current < steps.length - 1
                                &&
                                <Button type="primary" onClick={() => this.next()}>Next</Button>
                            }
                            {
                                this.state.current === steps.length - 1
                                &&
                                <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                            }
                            {
                                this.state.current > 0
                                &&
                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                    Previous
                                </Button>
                            }
                        </div>
                    </div>
</Col>
</Row>
</div>
);
}
};
