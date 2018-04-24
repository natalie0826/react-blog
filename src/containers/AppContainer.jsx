import { connect } from 'react-redux';

import { beInProfile } from '../actions/auth';

import App from '../components/App/App';

const mapStateToProps = state => ({
    profileStatus: state.getIn(['auth', 'profile']),
});

const mapDispatchToProps = dispatch => ({
    beInProfile: () => dispatch(beInProfile()),
});

export const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
