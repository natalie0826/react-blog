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
import { HeaderPosts } from '../../partials/HeaderPosts/HeaderPosts';
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
            {(posts.size > 0 && posts.getIn([categories.getIn([index, 'id']), 'isFetching']) === 'finish')
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

        {posts.getIn([-1, 'isFetching']) === 'finish' ?
          <HeaderPosts posts={posts.getIn([-1, 'posts'])} /> : <Spin />
        }

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            {this.renderCategories(categories, posts, isCategoriesLoading)}
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
