import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';

import { PostOverlay } from '../PostOverlay/PostOverlay';

export const Slider = (props) => {
  Slider.propTypes = {
    posts: PropTypes.array.isRequired,
  };

  return (
    <Carousel autoplay style={{'height': '300px'}}>
        {props.posts.map(post =>
            <div key={post.get('id')}>
                <PostOverlay
                    id={post.get('id')}
                    image={post.get("imageUrl")}
                    title={post.get("title")}
                    author={post.get("author")}
                    date={post.get("date")}
                />
            </div>
        )}
    </Carousel>
  )
}
