import { connect } from 'react-redux';

import { signIn, signUp, signInGoogle } from '../actions/auth';
import { openModal, closeModal } from '../actions/modal';
import MenuLogin from '../components/MenuMain/MenuLogin/MenuLogin';

const mapStateToProps = state => ({
    modalMode: state.getIn(['modal', 'modalMode']),
    modalType: state.getIn(['modal', 'modalType']),
    error: state.getIn(['auth', 'error']),
});

const mapDispatchToProps = dispatch => ({
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal()),
    signIn: (email, password) => dispatch(signIn(email, password)),
    signUp: (email, password, name, surname) => dispatch(signUp(email, password, name, surname)),
});

export const SignInUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuLogin);
