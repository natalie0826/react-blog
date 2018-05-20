import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { Slider } from '../Slider/Slider';
import { HorizontalGrid } from '../HorizontalGrid/HorizontalGrid';
import { VerticalGrid } from '../VerticalGrid/VerticalGrid';

export const CategoriesGenerator = (props) => {
  CategoriesGenerator.propTypes = {
    posts: PropTypes.instanceOf(List).isRequired,
    index: PropTypes.number,
    count: PropTypes.number,
  };

  const cutPosts = (posts, count = props.count) =>
    posts.filter((post, index) => index < count);

  if (props.index % 4 === 0) {
    return <HorizontalGrid posts={cutPosts(props.posts, 2)} />
  } else if (props.index % 2 === 0) {
    return <VerticalGrid posts={cutPosts(props.posts)} columns={3} />
  } else if (props.index % 3 === 0) {
    return <Slider posts={cutPosts(props.posts)}/>
  } else {
    return <VerticalGrid posts={cutPosts(props.posts, 2)} />
  }
}

CategoriesGenerator.defaultProps = {
  index: 1,
  count: 6,
}
