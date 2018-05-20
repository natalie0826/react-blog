import { connect } from 'react-redux';

import { beInProfile } from '../actions/auth';

import UserPage from '../components/pages/UserPage/UserPage';

const mapStateToProps = state => ({
    profile: state.getIn('auth', 'profile'),
});

const mapDispatchToProps = dispatch => ({
    beInProfile: () => dispatch(beInProfile()),
});

export const UserPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserPage);
