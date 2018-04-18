import { connect } from 'react-redux';

import { signInGoogle } from '../actions/auth';
import { openModal, closeModal } from '../actions/modal';
import MenuLogin from '../components/MenuMain/MenuLogin/MenuLogin';

const mapStateToProps = state => ({
    modalMode: state.getIn(['modal', 'modalMode']),
    modalType: state.getIn(['modal', 'modalType'])
});

const mapDispatchToProps = dispatch => ({
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal())
});

export const SignInUp = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuLogin);
