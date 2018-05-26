import { connect } from 'react-redux';

// import { getPost } from '../actions/posts';

import PostView from '../components/pages/PostView/PostView';

const mapStateToProps = (state, props) => ({
    posts: state.get('posts'),
    // currentPost:
});

const mapDispatchToProps = dispatch => ({
    // getPost: id => dispatch(getPost(id)),
});

export const PostViewContainer = connect(
    mapStateToProps,
    null
)(PostView);
