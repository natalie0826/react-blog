import { ACTION_TYPES } from '../constants/action-types';
import Modal from '../records/modal';

const initialState = new Modal({
    modalType: '',
    modalMode: false
});

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.TOGGLE_MODAL:
            return state.merge({
                modalType: action.payload.modalType,
                modalMode: action.payload.modalMode
            });
        default:
            return state;
    };
};
