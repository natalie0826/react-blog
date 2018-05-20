import { combineReducers } from 'redux-immutable';

import auth from './auth';
import categories from './categories';
import modal from './modal';
import posts from './posts';
import tags from './tags';

export const reducers = combineReducers({
    auth,
    categories,
    modal,
    posts,
    tags,
});
