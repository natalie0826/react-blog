import { api } from '../tools/ajax-tool';
import { BASE_URL } from '../constants/urls';
import { ACTION_TYPES } from '../constants/action-types';

export const loadTags = () => (dispatch) => {
  api
    .get(`${BASE_URL}/tags`)
    .then(res => {
      if (res.data.status === false) {
        dispatch(loadTagsFailure(res.data.message));
      } else {
        dispatch(loadTagsSuccess(res.data));
      }
    })
    .catch(error => {
      console.log('error error', error);
      dispatch(loadTagsFailure(error));
    });
}

export const loadTagsSuccess = tags => ({
    type: ACTION_TYPES.LOAD_TAGS_SUCCESS,
    payload: {
      tags,
    },
});

export const loadTagsFailure = (error) => ({
    type: ACTION_TYPES.LOAD_TAGS_FAILURE,
    payload: {
      error,
    },
});
