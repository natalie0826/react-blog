import thunk from 'redux-thunk';
import { Map } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers/index';

const initialState = Map({});

export const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);
