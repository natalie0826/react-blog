import { combineReducers } from 'redux-immutable';

import auth from './auth';

export const reducers = combineReducers({
    auth,
});
