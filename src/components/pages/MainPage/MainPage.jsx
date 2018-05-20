import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Divider, Button, Tag, Radio, Spin } from 'antd';

import { socialNetworks } from '../../../constants/social-networks';

import { CategoriesGenerator } from '../../partials/CategoriesGenerator/CategoriesGenerator';
import { CategoryTitle } from '../../common/CategoryTitle/CategoryTitle';
import { PostCard } from '../../partials/PostCard/PostCard';
import { PostImage } from '../../common/PostImage/PostImage';
import { PostHeader } from '../../common/PostHeader/PostHeader';
import { PostOverlay } from '../../partials/PostOverlay/PostOverlay';
import { Icons } from '../../common/Icons/Icons';

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

    renderCategories = (categories, posts, isCategoriesLoading) => {
      return categories.map((category, index) => {
        return (
          <CategoryTitle
            key={categories.get('id')}
            title={categories.getIn([index, 'name'])}
            loading={isCategoriesLoading}
          >
            {(posts.size > 0 && !posts.getIn([categories.getIn([index, 'id']), 'isFetching']))
            ? <CategoriesGenerator
                posts={posts.getIn([categories.getIn([index, 'id']), 'posts'])}
                key={index}
                index={index}
              />
            : <Spin />}
          </CategoryTitle>
        )
      })
    }

    render() {
      const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };

      const {
        isCategoriesLoading,
        categories,
        posts
      } = this.props;

    return (
        <div>
        {/* header posts */}
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                        <PostCard id="17" height="400" title="Flexbox vs float" text="some some some text some some some text some some some text some some some text some some some text some some some text some some some text some some some text some some some text some some some text some some some text some some some text some some some text" image="https://images.unsplash.com/photo-1509227035009-4bef0b738dd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92ba209a4e60bf47921d3ad689829adf&auto=format&fit=crop&w=666&q=80" />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <PostCard id="15" title="New post" height="150" image="https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a64fe247678762797ee55c6806862f07&auto=format&fit=crop&w=666&q=80" />
                        <PostCard id="17" title="Flexbox vs float" height="150" image="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-0.3.5&s=177fa5618e070b6d13cf5debd2034426&auto=format&fit=crop&w=772&q=80" />
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
                            <PostOverlay />
                            <PostHeader title="Some more posts" />
                            <Divider />
                            <PostHeader title="Some more posts" />
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

              {this.renderCategories(categories, posts, isCategoriesLoading)}

                {/* works
                  <CategoryTitle title={categories.getIn([0, 'name'])} loading={isCategoriesLoading}>
                  {(posts.size > 0 && !posts.getIn([categories.getIn([0, 'id']), 'isFetching'])) ?
                  posts.getIn([categories.getIn([0, 'id']), 'posts']).filter((post, index) => index < 2).map(post =>
                    <PostCard
                      isHorizontal
                      image={post.get('imageUrl')}
                    />) : <Spin />}
                </CategoryTitle> */}
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <div className="sidebar-block">
                    <p className="recent-posts__divider">
                        <span className="recent-posts__title">SOCIAL networks</span>
                        <span className="recent-posts__divider"></span>
                    </p>
                    <Icons content={socialNetworks} shape="circle" />
                </div>

                <div className="sidebar-block">
                    <p className="recent-posts__divider">
                        <span className="recent-posts__title">TOP 5 posts</span>
                        <span className="recent-posts__divider"></span>
                    </p>
                    <div className="top-posts">
                        <div className="top-one">
                            <div className="top-one-number">01</div>
                            <PostHeader title="Flexbox vs float" />
                        </div>

                        <div className="top-one">
                            <div className="top-one-number">02</div>
                            <PostHeader title="Future of the games" />
                        </div>

                        <div className="top-one">
                            <div className="top-one-number">03</div>
                            <PostHeader title="Game tutorial" />
                        </div>

                        <div className="top-one">
                            <div className="top-one-number">04</div>
                            <PostHeader title="Awesome guide" />
                        </div>

                        <div className="top-one">
                            <div className="top-one-number">05</div>
                            <PostHeader title="Create new dashboard" />
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
                    <p>Which category would you like to add?</p>
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            <Radio style={radioStyle} value={1}>Films</Radio>
                            <Radio style={radioStyle} value={2}>Tutorials</Radio>
                            <Radio style={radioStyle} value={3}>Courses</Radio>
                            <Radio style={radioStyle} value={4}>Book reviews</Radio>
                        </RadioGroup>
                    </div>
                    <br/>
                    <Button type="primary">Vote</Button>
                </div>
            </Col>
        </Row>
        </div>
    )
}
}
