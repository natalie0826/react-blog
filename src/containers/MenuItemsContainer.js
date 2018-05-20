import { connect } from 'react-redux';

import { loadCategories } from '../actions/categories';
import { fetchPosts } from '../actions/posts';

import MenuItems from '../components/partials/MenuMain/MenuItems/MenuItems';

const mapStateToProps = state => ({
    categories: state.getIn(['categories', 'categories']),
    isLoading: state.getIn(['categories', 'isLoading']),
});

const mapDispatchToProps = dispatch => ({
    loadCategories: () => dispatch(loadCategories()),
    fetchPosts: (categoryId) => dispatch(fetchPosts(categoryId)),
})

export const MenuItemsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuItems);
