import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MainPageContainer } from '../../containers/MainPageContainer';
import ByCategory from '../pages/ByCategory/ByCategory';
import PostView from '../pages/PostView/PostView';
import { UserPageContainer } from '../../containers/UserPageContainer';
import UserProfile from '../pages/UserProfile/UserProfile';
import { PostEditorContainer } from '../../containers/PostEditorContainer';
import { About } from '../pages/About/About';
import { Users } from '../pages/Users/Users';
import { NoMatch } from '../pages/NoMatch/NoMatch';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact strict component={MainPageContainer} />
            <Route path="/categories/:name" exact strict component={ByCategory} />
            <Route path="/post/:id" strict component={PostView} />
            <Route path="/profile" strict component={UserPageContainer} />
            {/* <Route path="/profile" strict render={(props) => (
                this.props.isAuth === true
                    ? <UserPageContainer />
                    : <Redirect to='/' />
                )}
            /> */}
            <Route path="/create/post" component={PostEditorContainer} />
            <Route path="/post/:id/edit" render={PostEditorContainer} />
            <Route path="/about" strict component={About} />
            <Route path="/users" strict component={Users} />
            <Route path="/user/:id" strict component={UserProfile} />
            <Route component={NoMatch}/>
        </Switch>
    );
};
