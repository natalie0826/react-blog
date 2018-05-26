import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Row, Col, Divider, Button } from 'antd';

import { PostCard } from '../PostCard/PostCard';
import { PostHeader } from '../../common/PostHeader/PostHeader';
import { PostOverlay } from '../PostOverlay/PostOverlay';

export const HeaderPosts = props => {
  HeaderPosts.propTypes = {
    posts: PropTypes.instanceOf(List).isRequired
  };

  const createPostCard = (post, isShort = false, height) =>
    <PostCard
        key={post.get('id')}
        id={post.get('id')}
        isShort={isShort}
        height={height}
        image={post.get('imageUrl')}
        text={post.get('text')}
        comments={post.get('comments')}
        author={post.get('author')}
        date={post.get('dateUpdate')}
        title={post.get('title')}
    />

  const createPostCardOverlay = post =>
    <PostOverlay
        key={post.get('id')}
        id={post.get('id')}
        image={post.get('imageUrl')}
        title={post.get('title')}
        author={post.get('author')}
        date={post.get('date')}
    />

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                    {props.posts.filter((post, index) => index === 0).map(post =>
                        createPostCard(post, false, 470)
                    )}
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    {props.posts.filter((post, index) => index > 0 && index < 3).map(post =>
                        createPostCard(post, true, 150)
                    )}
                </Col>
            </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div className="recent-posts">
                        <p className="recent-posts__divider">
                            <span className="recent-posts__title">RECENT POSTS</span>
                            <span className="recent-posts__divider" />
                        </p>
                        {props.posts.filter((post, index) => index > 2 && index < 6).map((post, index) => {
                            if (index === 0)
                                return createPostCardOverlay(post)
                            else
                              return (
                                <div style={{'marginTop': '20px'}} key={post.get('id')}>
                                    <PostHeader
                                        title={post.get('title')}
                                        author={post.get('author')}
                                        date={post.get('dateUpdate')}
                                    />
                                    <Divider />
                                </div>
                              )
                            }
                        )}
                        <div className="recent-posts__button">
                            <Button type="dashed" size="large" className="recent-posts__button--purple">More</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
    </Row>
  )
}
