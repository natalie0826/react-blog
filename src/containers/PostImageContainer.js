import { connect } from 'react-redux';

import { deletePost } from '../actions/posts';

import PostImage from '../components/common/PostImage/PostImage';

const mapStateToProps = (state, props) => ({
    posts: state.get('posts'),
    // currentPost:
});

const mapDispatchToProps = dispatch => ({
    deletePost: id => dispatch(deletePost(id)),
});

export const PostImageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostImage);
