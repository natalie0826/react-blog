import { connect } from 'react-redux';

import { beInProfile } from '../actions/auth';
import { loadCategories } from '../actions/categories';
import { fetchPosts } from '../actions/posts';

import App from '../components/App/App';

const mapStateToProps = state => ({
    isAuth: state.getIn(['auth', 'isAuth']),
    profileStatus: state.getIn(['auth', 'profile']),
    posts: state.getIn(['posts', 'posts']),
    categories: state.getIn(['categories', 'categories']),
    isLoading: state.getIn(['categories', 'isLoading']),
});

const mapDispatchToProps = dispatch => ({
    beInProfile: () => dispatch(beInProfile()),
    loadCategories: () => dispatch(loadCategories()),
    fetchPosts: (categoryId) => dispatch(fetchPosts(categoryId)),
});

export const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
