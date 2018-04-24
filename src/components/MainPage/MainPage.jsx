import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Icon, Divider, Button, Carousel, Tag, Radio, Input } from 'antd';

import './MainPage.css';
import { PostVerticalLittle } from '../PostsPreview/PostVerticalLittle/PostVerticalLittle';
import { PostVertical } from '../PostsPreview/PostVertical/PostVertical';
import { PostHorizontal } from '../PostsPreview/PostHorizontal/PostHorizontal';
import { CategoryTitle } from '../CategoryTitle/CategoryTitle';

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
                        <PostVertical />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <PostVerticalLittle />
                        <PostVerticalLittle />
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
                    <CategoryTitle title="Programming" />
                    <PostHorizontal />
                    <PostHorizontal />
                </div>

                {/* WEB SITE DEV */}
                <div className="category-block">
                    <CategoryTitle title="WEB SITE DEV" />
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <PostVertical />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                            <PostVertical />   
                        </Col>
                    </Row>
                </div>

                {/* GAME SITE DEV */}
                <div className="category-block">
                    <CategoryTitle title="GAME SITE DEV" />
                    <Carousel autoplay style={{'height': '300px'}}>
                    <div className="post-img">
                                <div className="post-img__wrapper">
                                    <div className="post-img__overlay"></div>
                                    <div className="image-slider" >
                                    <img src="https://images.unsplash.com/photo-1517696073804-9ce92f44f35d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2b44cd9f577bca7b27a459613e2d179d&auto=format&fit=crop&w=1351&q=80" alt=""/>
                                                                        </div>
                                    <div className="post-img__text post-img__text--slider">
                                        <p className="post-img__text--title">Chief Operating Officer</p>
                                        <p className="post-img__text--date">15 JUL 2018</p>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="post-img">
                                <div className="post-img__wrapper">
                                    <div className="post-img__overlay"></div>
                                    <div className="image-slider">
                                        <img src="https://images.unsplash.com/photo-1516741247836-f66dfdfd1b22?ixlib=rb-0.3.5&s=7ae18737a6e556097cb3f191fd5daf5e&auto=format&fit=crop&w=599&q=80" alt="Headshot of Thomas Jefferson" />
                                    </div>
                                    <div className="post-img__text post-img__text--slider">
                                        <p className="post-img__text--title">Chief Operating Officer</p>
                                        <p className="post-img__text--date">15 JUL 2018</p>
                                    </div>
                                </div>
                            </div>

                            <div className="post-img">
                                <div className="post-img__wrapper">
                                    <div className="post-img__overlay"></div>
                                    <div className="image-slider">
                                        <img src="https://images.unsplash.com/photo-1508240155128-3b7b40767aa1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=765113db149d05d2a9b69bdca93ef10f&auto=format&fit=crop&w=732&q=80" alt="Headshot of Thomas Jefferson" />
                                    </div>
                                    <div className="post-img__text post-img__text--slider">
                                        <p className="post-img__text--title">Chief Operating Officer</p>
                                        <p className="post-img__text--date">15 JUL 2018</p>
                                    </div>
                                </div>
                            </div>

                            <div className="post-img">
                                <div className="post-img__wrapper">
                                    <div className="post-img__overlay"></div>
                                    <div className="image-slider">
                                        <img src="https://images.unsplash.com/photo-1475506631979-72412c606f4d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a1a50de939164e2523f33bfae3041b30&auto=format&fit=crop&w=750&q=80" />
                                    </div>
                                    <div className="post-img__text post-img__text--slider">
                                        <p className="post-img__text--title">Chief Operating Officer</p>
                                        <p className="post-img__text--date">15 JUL 2018</p>
                                    </div>
                                </div>
                            </div>
                    </Carousel>
                </div>

                {/* CAREERS IN IT */}
                <div className="category-block">
                    <CategoryTitle title="Careers in it" />
                    <PostHorizontal />
                    <PostHorizontal />
                </div>

                {/* INTERFACES */}
                <div className="category-block">
                    <CategoryTitle title="interfaces" />
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            <PostVerticalLittle />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            <PostVerticalLittle />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            <PostVerticalLittle />
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            <PostVerticalLittle />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            <PostVerticalLittle />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            <PostVerticalLittle />
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
