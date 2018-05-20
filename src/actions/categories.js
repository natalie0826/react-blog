import { api } from '../tools/ajax-tool';
import { BASE_URL } from '../constants/urls';
import { ACTION_TYPES } from '../constants/action-types';

export const loadCategories = () => (dispatch) => {
      dispatch(loadCategoriesStatus());
      api
          .get(`${BASE_URL}/categories`)
              .then(res => {
                  if (res.data.status === false) {
                      dispatch(loadCategoriesFailure(res.data.message));
                  } else {
                      dispatch(loadCategoriesSuccess(res.data));
                  }
              })
              .catch(error => {
                  dispatch(loadCategoriesFailure(error));
              });
}

export const loadCategoriesStatus = () => ({
    type: ACTION_TYPES.LOAD_CATEGORIES,
});

export const loadCategoriesSuccess = (categories) => ({
    type: ACTION_TYPES.LOAD_CATEGORIES_SUCCESS,
    payload: {
        categories,
    },
});

export const loadCategoriesFailure = (error) => ({
    type: ACTION_TYPES.LOAD_CATEGORIES_FAILURE,
    payload: {
        error,
    },
});
