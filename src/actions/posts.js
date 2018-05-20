import { api } from '../tools/ajax-tool';
import { BASE_URL } from '../constants/urls';
import { ACTION_TYPES } from '../constants/action-types';

export const fetchPosts = (categoryId, count = 24, page = 0) => (dispatch) => {
  dispatch(fetchPostsStatus(categoryId));
  const offset = count * page;
  api
    .get(`${BASE_URL}/categories/${categoryId}/posts?page=${page}&limit=${count}&offset=${offset}`)
    .then(res => {
      if (res.data.status === false) {
        console.log('errror', res.data.message);
        dispatch(fetchPostsFailure(res.data.message, categoryId));
      } else {
        console.log('success');
        dispatch(fetchPostsSuccess(res.data, categoryId));
      }
    })
    .catch(error => {
      console.log('error error', error);
      dispatch(fetchPostsFailure(error, categoryId));
    });
}

export const fetchPostsStatus = (categoryId) => ({
    type: ACTION_TYPES.FETCH_POSTS,
    payload: {
      categoryId,
    },
});

export const fetchPostsSuccess = (posts, categoryId) => ({
    type: ACTION_TYPES.FETCH_POSTS_SUCCESS,
    payload: {
      categoryId,
      posts: posts['rows'],
      count: posts['count'],
    },
});

export const fetchPostsFailure = (error, categoryId) => ({
    type: ACTION_TYPES.FETCH_POSTS_FAILURE,
    payload: {
      categoryId,
      error,
    },
});
