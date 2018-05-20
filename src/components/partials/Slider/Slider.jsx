import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Carousel } from 'antd';

import { PostOverlay } from '../PostOverlay/PostOverlay';

export const Slider = (props) => {
  Slider.propTypes = {
    // posts: PropTypes.instanceOf(List).isRequired,
  };

  return (
    <Carousel autoplay style={{'height': '300px'}}>
      {props.posts.map(post =>
        <div>
          <PostOverlay />
        </div>
      )}
    </Carousel>
  )
}
