import { connect } from 'react-redux';

import { signIn, signUp, signInGoogle } from '../actions/auth';
import { openModal, closeModal } from '../actions/modal';
import MenuLogin from '../components/partials/MenuMain/MenuLogin/MenuLogin';

const mapStateToProps = state => ({
    modalMode: state.getIn(['modal', 'modalMode']),
    modalType: state.getIn(['modal', 'modalType']),
    error: state.getIn(['auth', 'error']),
    isAuth: state.getIn(['auth', 'isAuth']),
});

const mapDispatchToProps = dispatch => ({
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal()),
    signIn: (email, password) => dispatch(signIn(email, password)),
    signUp: (email, password, name, surname) => dispatch(signUp(email, password, name, surname)),
    signInGoogle: () => dispatch(signInGoogle),
});

export const SignInUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuLogin);
