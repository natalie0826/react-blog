import { Record } from 'immutable';

const User = Record({
    isAuth: null,
    user: null,
    profile: null,
    error: null,
});

export default User;
