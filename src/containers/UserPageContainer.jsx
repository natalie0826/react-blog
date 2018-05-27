import { connect } from 'react-redux';

import { beInProfile } from '../actions/auth';

import UserPage from '../components/pages/UserPage/UserPage';

const mapStateToProps = state => ({
    profile: state.getIn(['auth', 'profile']),
    userInfo: state.getIn(['auth', 'user']),
    posts: state.get('posts'),
});

const mapDispatchToProps = dispatch => ({
    beInProfile: () => dispatch(beInProfile()),
});

export const UserPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserPage);
