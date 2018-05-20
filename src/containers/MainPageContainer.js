import { connect } from 'react-redux';

import { fetchPosts } from '../actions/posts';

import MainPage from '../components/pages/MainPage/MainPage';

const mapStateToProps = state => ({
    posts: state.get('posts'),
    categories: state.getIn(['categories', 'categories']),
    isCategoriesLoading: state.getIn(['categories', 'isLoading']),
});

const mapDispatchToProps = dispatch => ({

});

export const MainPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainPage);
