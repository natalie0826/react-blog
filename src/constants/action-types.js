import keyMirror from 'keymirror';

export const ACTION_TYPES = keyMirror({
    SET_USER: null,

    // modal action types
    TOGGLE_MODAL: null,

    // auth
    SIGN_IN_SUCCESS: null,
    SIGN_IN_ERROR: null,
    SIGN_UP: null,
});
