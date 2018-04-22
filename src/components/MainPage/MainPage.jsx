import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Icon, Divider, Button, Carousel, Tag, Radio, Input } from 'antd';

import './MainPage.css';

const RadioGroup = Radio.Group;
export default class MainPage extends React.Component {

    state = {
        value: 1,
      }
      onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      }

      render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };
    return (


        
        <div>
        {/* header posts */}
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                        <Link to="/post/1" style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <div className="card__image">
                                    <img src="https://images.unsplash.com/photo-1509227035009-4bef0b738dd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92ba209a4e60bf47921d3ad689829adf&auto=format&fit=crop&w=666&q=80" alt="" />
                                </div>
                                <div className="card__description">
                                    <div className="info">
                                        {/* <span class="line _long"></span>
                                <span class="line _short"></span> */}
                                        <h1 className="info__title">Some more posts</h1>
                                        <div className="info__subtitle">
                                            <span>Pina Chaudhary</span>
                                            <span> - </span>
                                            <span className="info__subtitle--light">15 jul 2018</span>
                                        </div>
                                        <hr className="info__divider" />
                                        <p className="info__text">The publisher invested $35 million in Ubisoft Winnipeg hiring people, who can help build new tech to improve Ubisoft’s world-building tech.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className="card card--first">
                            <div className="card__image">
                                <img src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-0.3.5&s=177fa5618e070b6d13cf5debd2034426&auto=format&fit=crop&w=772&q=80" alt="" />
                            </div>
                            <div className="card__description card__description--little">
                                <div className="info">
                                    {/* <span class="line _long"></span>
                                    <span class="line _short"></span> */}
                                    <h1 className="info__title info__title--little">Some more posts</h1>
                                    <div className="info__subtitle info__subtitle--little">
                                        <span>Pina Chaudhary</span>
                                        <span> - </span>
                                        <span className="info__subtitle--light">15 jul 2018</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__image">
                                <img src="https://images.unsplash.com/photo-1522199696220-f42195d8b7fb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0942b0905adcc3cf9f7b7b4f78bc1ddf&auto=format&fit=crop&w=1052&q=80" alt="" />
                            </div>
                            <div className="card__description card__description--little">
                                <div className="info">
                                    {/* <span class="line _long"></span>
                                    <span class="line _short"></span> */}
                                    <h1 className="info__title info__title--little">Some more posts</h1>
                                    <div className="info__subtitle info__subtitle--little">
                                        <span>Pina Chaudhary</span>
                                        <span> - </span>
                                        <span className="info__subtitle--light">15 jul 2018</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <div className="recent-posts">
                            <p className="recent-posts__divider">
                                <span className="recent-posts__title">RECENT POSTS</span>
                                <span className="recent-posts__divider"></span>
                            </p>
                            <div className="post-img">
                                <div className="post-img__wrapper">
                                    <div className="post-img__overlay"></div>
                                    <div className="image">
                                        <img src="https://images.unsplash.com/photo-1520971081497-3aa1750677b8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=36a8afdeed4add3bcaf131b88f568fea&auto=format&fit=crop&w=750&q=80" alt="Headshot of Thomas Jefferson" />
                                    </div>
                                    <div className="post-img__text">
                                        <p className="post-img__text--title">Chief Operating Officer</p>
                                        <p className="post-img__text--date">15 JUL 2018</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card__description card__description--little">
                                <div className="info">
                                    {/* <span class="line _long"></span>
                                    <span class="line _short"></span> */}
                                    <h1 className="info__title info__title--little">Some more posts</h1>
                                    <div className="info__subtitle info__subtitle--little">
                                        <span>Pina Chaudhary</span>
                                        <span> - </span>
                                        <span className="info__subtitle--light">15 jul 2018</span>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="card__description card__description--little">
                                <div className="info">
                                    {/* <span class="line _long"></span>
                                    <span class="line _short"></span> */}
                                    <h1 className="info__title info__title--little">Some more posts</h1>
                                    <div className="info__subtitle info__subtitle--little">
                                        <span>Pina Chaudhary</span>
                                        <span> - </span>
                                        <span className="info__subtitle--light">15 jul 2018</span>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="recent-posts__button">
                                <Button type="dashed" size="large" className="recent-posts__button--purple">More</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>



        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            {/* Programming */}
                <div className="category-block">
                    <p className="recent-posts__divider">
                        <span className="recent-posts__title" style={{ 'backgroundColor': '#673AB7', 'padding': '0 5px', 'color': '#ffffff' }}>Programming</span>
                        <span className="recent-posts__divider" style={{ 'borderColor': '#673AB7' }}></span>
                    </p>

                    <div className="post-horizontal-container">
                        <div className="post-horizontal-image" style={{ 'backgroundImage': 'url("https://images.unsplash.com/photo-1484544808355-8ec84e534d75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc1407c2a550b0ebf3def8b81fa7b4a2&auto=format&fit=crop&w=766&q=80")' }} />
                        <div className="post-horizontal">
                            <h1 className="post-horizontal-title">Everything You Need to Know About Painting Your House, Except for How to Do It</h1>
                            <div className="info__subtitle">
                                <span>Pina Chaudhary</span>
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

                    <div className="post-horizontal-container">
                        <div className="post-horizontal-image" style={{ 'backgroundImage': 'url("https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=377e356cce015c363d123504857f8137&auto=format&fit=crop&w=711&q=80")' }} />
                        <div className="post-horizontal">
                            <h1 className="post-horizontal-title">Everything You Need to Know About Painting Your House, Except for How to Do It</h1>
                            <div className="info__subtitle">
                                <span>Pina Chaudhary</span>
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
                </div>

                {/* WEB SITE DEV */}
                <div className="category-block">
                    <p className="recent-posts__divider">
                        <span className="recent-posts__title" style={{ 'backgroundColor': '#673AB7', 'padding': '0 5px', 'color': '#ffffff' }}>web site dev</span>
                        <span className="recent-posts__divider" style={{ 'borderColor': '#673AB7' }}></span>
                    </p>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <Link to="/post/1" style={{ textDecoration: 'none' }}>
                                <div className="card">
                                    <div className="card__image">
                                        <img src="https://images.unsplash.com/photo-1509227035009-4bef0b738dd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92ba209a4e60bf47921d3ad689829adf&auto=format&fit=crop&w=666&q=80" alt="" />
                                    </div>
                                    <div className="card__description">
                                        <div className="info">
                                            {/* <span class="line _long"></span>
                                    <span class="line _short"></span> */}
                                            <h1 className="info__title">Some more posts</h1>
                                            <div className="info__subtitle">
                                                <span>Pina Chaudhary</span>
                                                <span> - </span>
                                                <span className="info__subtitle--light">15 jul 2018</span>
                                            </div>
                                            <hr className="info__divider" />
                                            <p className="info__text">The publisher invested $35 million in Ubisoft Winnipeg hiring people, who can help build new tech to improve Ubisoft’s world-building tech.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <Link to="/post/1" style={{ textDecoration: 'none' }}>
                                <div className="card">
                                    <div className="card__image">
                                        <img src="https://images.unsplash.com/photo-1509227035009-4bef0b738dd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92ba209a4e60bf47921d3ad689829adf&auto=format&fit=crop&w=666&q=80" alt="" />
                                    </div>
                                    <div className="card__description">
                                        <div className="info">
                                            {/* <span class="line _long"></span>
                                    <span class="line _short"></span> */}
                                            <h1 className="info__title">Some more posts</h1>
                                            <div className="info__subtitle">
                                                <span>Pina Chaudhary</span>
                                                <span> - </span>
                                                <span className="info__subtitle--light">15 jul 2018</span>
                                            </div>
                                            <hr className="info__divider" />
                                            <p className="info__text">The publisher invested $35 million in Ubisoft Winnipeg hiring people, who can help build new tech to improve Ubisoft’s world-building tech.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </div>

                {/* GAME SITE DEV */}
                <div className="category-block">
                    <p className="recent-posts__divider">
                        <span className="recent-posts__title" style={{ 'backgroundColor': '#673AB7', 'padding': '0 5px', 'color': '#ffffff' }}>game site dev</span>
                        <span className="recent-posts__divider" style={{ 'borderColor': '#673AB7' }}></span>
                    </p>
                    <Carousel autoplay>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </div>

                {/* CAREERS IN IT */}
                <div className="category-block">
                    <p className="recent-posts__divider">
                        <span className="recent-posts__title" style={{ 'backgroundColor': '#673AB7', 'padding': '0 5px', 'color': '#ffffff' }}>careers in it</span>
                        <span className="recent-posts__divider" style={{ 'borderColor': '#673AB7' }}></span>
                    </p>
                </div>

                {/* INTERFACES */}
                <div className="category-block">
                    <p className="recent-posts__divider">
                        <span className="recent-posts__title" style={{ 'backgroundColor': '#673AB7', 'padding': '0 5px', 'color': '#ffffff' }}>careers in it</span>
                        <span className="recent-posts__divider" style={{ 'borderColor': '#673AB7' }}></span>
                    </p>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        text
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        text
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        text
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <div className="sidebar-block">
                    <p className="recent-posts__divider">
                        <span className="recent-posts__title">SOCIAL networks</span>
                        <span className="recent-posts__divider"></span>
                    </p>
                    <div className="social-network">
                        <Button size="large" shape="circle" icon="twitter" />
                        <Button size="large" shape="circle" icon="facebook" />
                        <Button size="large" shape="circle" icon="instagram" />
                        <Button size="large" shape="circle" icon="linkedin" />
                        <Button size="large" shape="circle" icon="github" />
                        <Button size="large" shape="circle" icon="google-plus" />
                    </div>
                </div>

                <div className="sidebar-block">
                    <p className="recent-posts__divider">
                        <span className="recent-posts__title">TOP 5 posts</span>
                        <span className="recent-posts__divider"></span>
                    </p>
                    <div className="top-posts">
                        <div className="top-one">
                            <div className="top-one-number">01</div>
                            <div className="top-one-info">
                                <p className="post-img__text--title">Chief Operating Officer</p>
                                <p className="post-img__text--date">15 JUL 2018</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-block">
                    <p className="recent-posts__divider">
                        <span className="recent-posts__title">top 10 tags</span>
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

                <div className="sidebar-block">
                    <p className="recent-posts__divider">
                        <span className="recent-posts__title">quiz</span>
                        <span className="recent-posts__divider"></span>
                    </p>
                    <div className="post-tags top-tags">
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            <Radio style={radioStyle} value={1}>Option A</Radio>
                            <Radio style={radioStyle} value={2}>Option B</Radio>
                            <Radio style={radioStyle} value={3}>Option C</Radio>
                            <Radio style={radioStyle} value={4}>
                            {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                            </Radio>
                        </RadioGroup>
                    </div>
                </div>
            </Col>
        </Row>








        </div>

    )
}
}
