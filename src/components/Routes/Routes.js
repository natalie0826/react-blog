import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import { Home } from '../Home/Home';
import { Header } from '../Header/Header';
import { PostView } from '../PostView/PostView';
import { PostEditor } from '../PostEditor/PostEditor';
import { UserPage } from '../UserPage/UserPage';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact strict render={Home} />
            <Route path="/post/:id" exact strict render={PostView} />
            <Route path="/profile" exact strict render={UserPage} />
            <Route path="post/create" render={PostEditor} />
            <Route path="post/:id/edit" render={PostEditor} />
        </Switch>
    );
};
