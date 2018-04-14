import React from 'react';
import { connect } from 'react-redux';

import { signInGoogle } from '../actions/auth';
import { Auth } from '../components/Auth/Auth';

// const mapStateToProps = state => ({

// })

const mapDispatchToProps = dispatch => ({
    signInGoogle: () => dispatch(signInGoogle)
});

export const SignIn = connect(
    null,
    mapDispatchToProps
)(Auth);
