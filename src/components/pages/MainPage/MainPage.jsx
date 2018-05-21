import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Link } from 'react-router-dom';
import { Row, Col, Divider, Button, Tag, Radio, Spin } from 'antd';

import { CategoriesGenerator } from '../../partials/CategoriesGenerator/CategoriesGenerator';
import { CategoryTitle } from '../../common/CategoryTitle/CategoryTitle';
import { PostHeader } from '../../common/PostHeader/PostHeader';
import { HeaderPosts } from '../../partials/HeaderPosts/HeaderPosts';
import { Icons } from '../../common/Icons/Icons';

import { socialNetworks } from '../../../constants/social-networks';

import './MainPage.css';

const RadioGroup = Radio.Group;

export default class MainPage extends React.Component {
    static propTypes = {
      loadTags: PropTypes.func.isRequired,
      tags: PropTypes.instanceOf(List).isRequired,
      tagsLoading: PropTypes.string.isRequired,
    }

    state = {
      value: 1,
    }

    componentDidMount() {
      this.props.loadTags();
    }


    onChange = (e) => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
    }

    renderCategories = (categories, posts, isCategoriesLoading) => {
      if (isCategoriesLoading !== 'finish') {
        return <Spin />
      } else {
        return categories.map(category =>
            <CategoryTitle
              key={category.get('id')}
              title={category.get('name')}
              loadStatus={isCategoriesLoading}
            >
              {(posts.size > 0 && posts.getIn([category.get('id'), 'isFetching']) === 'finish')
              ? <CategoriesGenerator
                  posts={posts.getIn([category.get('id'), 'posts'])}
                  key={category.get('id')}
                  index={category.get('id')}
                />
              : <Spin />}
            </CategoryTitle>
          )
        }
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
        posts,
        tagsLoading,
        tags
      } = this.props;

      console.log('tags', tags);

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
                      <span className="recent-posts__divider" />
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
                    {tagsLoading === 'finish'
                    ? tags.sort((a, b) => b.get('count') - a.get('count')).slice(0, 10).map(tag => <Tag color="#673ab7">#{tag.get('name')}</Tag>)
                    : <Spin />}
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
