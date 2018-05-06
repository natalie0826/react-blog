import { combineReducers } from 'redux-immutable';

import auth from './auth';
import categories from './categories';
import modal from './modal';
import posts from './posts';

export const reducers = combineReducers({
    auth,
    categories,
    modal,
    posts,
});
