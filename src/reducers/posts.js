import { List } from 'immutable';

import { ACTION_TYPES } from '../constants/action-types';
import Posts from '../records/posts';
import Post from '../records/post';

const initialState = new Posts({
    isFetching: false,
    posts: List(Post)
});

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
