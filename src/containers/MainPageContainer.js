import { connect } from 'react-redux';

import { loadTags } from '../actions/tags';

import MainPage from '../components/pages/MainPage/MainPage';

const mapStateToProps = state => ({
  posts: state.get('posts'),
  categories: state.getIn(['categories', 'categories']),
  isCategoriesLoading: state.getIn(['categories', 'loadStatus']),
  tagsLoading: state.getIn(['tags', 'loadStatus']),
  tags: state.getIn(['tags', 'tags']),
});

const mapDispatchToProps = dispatch => ({
  loadTags: () => dispatch(loadTags()),
});

export const MainPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainPage);
