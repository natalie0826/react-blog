import React from 'react';
import { connect } from 'react-redux';

import { signInGoogle } from '../actions/auth';
import { AuthModal } from '../components/AuthModal/AuthModal';

// const mapStateToProps = state => ({

// })

const mapDispatchToProps = dispatch => ({
    signInGoogle: () => dispatch(signInGoogle)
});

export const SignIn = connect(
    null,
    mapDispatchToProps
)(AuthModal);
