import { combineReducers } from 'redux-immutable';

import auth from './auth';
import modal from './modal';

export const reducers = combineReducers({
    auth,
    modal,
});
