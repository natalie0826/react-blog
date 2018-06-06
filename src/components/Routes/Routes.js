import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MainPageContainer } from '../../containers/MainPageContainer';
import { PostViewContainer } from '../../containers/PostViewContainer';
import { UserPageContainer } from '../../containers/UserPageContainer';
import { PostEditorContainer } from '../../containers/PostEditorContainer';
// import { Dashboard } from '../dashboard/components/Dashboard';
import { ByCategoryContainer } from '../../containers/ByCategoryContainer';
import UserProfile from '../pages/UserProfile/UserProfile';
import { About } from '../pages/About/About';
import Users from '../pages/Users/Users';
import { EditProfileContainer } from '../../containers/EditProfileContainer';
import { NoMatch } from '../pages/NoMatch/NoMatch';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact strict component={MainPageContainer} />
            <Route path="/categories/:id" exact strict component={ByCategoryContainer} />
            <Route path="/post/:id" strict component={PostViewContainer} />
            <Route path="/profile" strict component={UserPageContainer} />
            <Route path="/profile/edit" strict component={EditProfileContainer} />
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
            {/* <Route path="/user/:id/dashboard" strict component={Dashboard} /> */}
            <Route component={NoMatch}/>
        </Switch>
    );
};
