import { ACTION_TYPES } from '../constants/action-types';
import User from '../records/user';

const initialState = new User({
    isAuth: false,
    user: {},
    error: ''
});

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_USER:
            return state.merge({
                'isAuth': action.payload.user.length ? true : false,
                'user': action.payload.user
            });
        case ACTION_TYPES.SIGN_IN_SUCCESS:
            return state.merge({
                'isAuth': true,
                'user': {
                    'email': action.payload.email,
                    'name': action.payload.name,
                    'surname': action.payload.surname,
                }
            });
        case ACTION_TYPES.SIGN_IN_ERROR:
            console.log('sign in error');
            return state.merge({
                'isAuth': false,
                'error': action.payload.error,
            });
        default:
            return state;
    }
};
