import { api } from '../tools/ajax-tool';
import { BASE_URL } from '../constants/urls';
import { ACTION_TYPES } from '../constants/action-types';

export const setUser = (user) => ({
    type: ACTION_TYPES.SET_USER,
    payload: {
        user,
    },
});

export const signInGoogle = (user) => {
    return (dispatch) => {
        api
            .post(`${BASE_URL}/session`, {
                "email": "email@mail.com",
                "name": "name",
                "surname": "surname",
                "password": "123123"
            })
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }
}
