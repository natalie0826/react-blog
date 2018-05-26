import { connect } from 'react-redux';

import { createPost } from '../actions/posts';

import PostEditor from '../components/pages/PostEditor/PostEditor';

const mapStateToProps = state => ({
    tags: state.getIn(['tags', 'tags']),
    categories: state.getIn(['categories', 'categories']),
});

const mapDispatchToProps = dispatch => ({
    createPost: (post) => dispatch(createPost(post)),
});

export const PostEditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostEditor);
