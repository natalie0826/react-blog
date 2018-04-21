import { ACTION_TYPES } from '../constants/action-types';

export const openModal = (modalType) => ({
    type: ACTION_TYPES.TOGGLE_MODAL,
    payload: {
        modalMode: true,
        modalType,
    }
});

export const closeModal = () => ({
    type: ACTION_TYPES.TOGGLE_MODAL,
    payload: {
        modalMode: false,
        modalType: '',
    }
});
