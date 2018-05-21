import { connect } from 'react-redux';

import { createPost } from '../actions/posts';

import PostEditor from '../components/pages/PostEditor/PostEditor';

const mapStateToProps = state => ({
    tags: state.getIn(['tags', 'tags']),
    categories: state.getIn(['categories', 'categories']),
});

const mapDispatchToProps = dispatch => ({
    createPost: () => dispatch(createPost()),
});

export const PostEditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostEditor);
