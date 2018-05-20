import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { PostCard } from '../PostCard/PostCard';

export const HorizontalGrid = (props) => {
  HorizontalGrid.propTypes = {
    posts: PropTypes.instanceOf(List).isRequired
  };

  console.log('horizonatl', props);

  return (
      props.posts.map(post =>
        <PostCard
          isHorizontal
          showMeta
          key={post.get('id')}
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
