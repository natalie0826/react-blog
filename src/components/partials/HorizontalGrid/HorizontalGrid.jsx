import React from 'react';
import PropTypes from 'prop-types';

import { PostCard } from '../PostCard/PostCard';

export const HorizontalGrid = (props) => {
  HorizontalGrid.propTypes = {
    posts: PropTypes.array.isRequired
  };

  return (
      props.posts.map(post =>
        <PostCard
            isHorizontal
            showMeta
            key={post.get('id')}
            id={post.get('id')}
            image={post.get('imageUrl')}
            text={post.get('text')}
            comments={post.get('comments')}
            author={post.get('author')}
            date={post.get('dateUpdate')}
            title={post.get('title')}
        />)
  );
}
// minutes: PropTypes.number,
