import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from './containers/AppContainer';
import { store } from './store';

import './index.css';

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
document.getElementById('root'));
