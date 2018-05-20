import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Row, Col } from 'antd';

import { PostCard } from '../PostCard/PostCard';

export const VerticalGrid = props => {
  VerticalGrid.propTypes={
    posts: PropTypes.instanceOf(List).isRequired,
    columns: PropTypes.number
  };

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {props.posts.map(post => {
        return (
          <Col xs={24} sm={24} md={24} lg={24/props.columns} xl={24/props.columns}>
            {props.columns === 2
              ?
              <PostCard
                key={post.get('id')}
                image={post.get('imageUrl')}
                text={post.get('text')}
                author={post.get('author')}
                date={post.get('dateUpdate')}
                title={post.get('title')}
              />
              :
              <PostCard
                key={post.get('id')}
                height={150}
                image={post.get('imageUrl')}
                author={post.get('author')}
                date={post.get('dateUpdate')}
                title={post.get('title')}
              />
            }
          </Col>
        );
      })}
    </Row>
  )
}

VerticalGrid.defaultProps = {
  columns: 2,
};
