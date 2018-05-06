import { List, Record } from 'immutable';

import { ACTION_TYPES } from '../constants/action-types';

import Category from '../records/category';
import Categories from '../records/categories';

const initialState = new Categories({
    isLoading: false,
    categories: List(Category),
    error: null
});

const getCategories = (categories) => {
    return categories.map(category => {
        return new Category({
            id: category.id,
            name: category.name
        });
    });
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.LOAD_CATEGORIES:
            return state.set('isLoading', true);
        case ACTION_TYPES.LOAD_CATEGORIES_SUCCESS:
            return state.merge({
                'isLoading': false,
                'categories': getCategories(action.payload.categories)
            });
        case ACTION_TYPES.LOAD_CATEGORIES_FAILURE:
            return state.merge({
                'isLoading': false,
                'error': action.payload.error
            });
        default:
            return state;
    }
};
