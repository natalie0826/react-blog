import { connect } from 'react-redux';

// import { loadTags } from '../actions/tags';

import { EditProfile } from '../components/pages/EditProfile/EditProfile';

const mapStateToProps = state => ({
  posts: state.get('posts'),
  // categories: state.getIn(['categories', 'categories']),
  // isCategoriesLoading: state.getIn(['categories', 'loadStatus']),
  // tagsLoading: state.getIn(['tags', 'loadStatus']),
  // tags: state.getIn(['tags', 'tags']),
});

const mapDispatchToProps = dispatch => ({
  // loadTags: () => dispatch(loadTags()),
});

export const EditProfileContainer = connect(
    mapStateToProps,
    null,
)(EditProfile);
