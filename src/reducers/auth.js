import { ACTION_TYPES } from '../constants/action-types';
import User from '../records/user';

const initialState = new User({
    isAuth: false,
    user: {}
});

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_USER:
            return state.merge({
                'isAuth': action.payload.user.length ? true : false,
                'user': action.payload.user
            });
        default:
            return state;
    }
};
