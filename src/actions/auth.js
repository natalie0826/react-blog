import { api } from '../tools/ajax-tool';
import { BASE_URL } from '../constants/urls';
import { ACTION_TYPES } from '../constants/action-types';

export const setUser = (user) => ({
    type: ACTION_TYPES.SET_USER,
    payload: {
        user,
    },
});

export const signInGoogle = (email, name, surname, password) => {
    return (dispatch) => {
        api
            .post(`${BASE_URL}/session`, {
                'email': email,
                'name': name,
                'surname': surname,
                'password': password
            })
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }
}

export const signIn = (email, password) => {
    return (dispatch) => {
        api
            .post(`${BASE_URL}/session`, {
                'email': email,
                'password': password
            })
            .then(res => {
                console.log(res);
                if (res.data.status === false) {
                    dispatch(signInError(res.data.message));
                } else {
                    dispatch(signInSuccess(res.data));
                }
            })
            .catch(error => dispatch(signInError(error)));
    }
}

export const signUp = (email, name, surname, password) => {
    console.log('sign up');
    return (dispatch) => {
        api
            .post(`${BASE_URL}/users`, {
                'email': email,
                'name': name,
                'surname': surname,
                'password': password
            })
            .then(res => {
                console.log(res);
                if (res.data.status === false) {
                    dispatch(signInError(res.data.message));
                } else {
                    dispatch(signInSuccess(res.data));
                }
            })
            .catch(error => dispatch(signInError(error)));
    }
}


export const signInSuccess = ({ id, email, name, surname, token }) => ({
    type: ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: {
        id,
        email,
        name,
        surname,
        token,
    }
});

export const signInError = (error) => ({
    type: ACTION_TYPES.SIGN_IN_ERROR,
    payload: {
        error,
    }
});
