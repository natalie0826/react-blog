import { api } from '../tools/ajax-tool';
import { BASE_URL } from '../constants/urls';
import { ACTION_TYPES } from '../constants/action-types';

export const fetchPosts = (categoryId = -1, count = 24, page = 0) => dispatch => {
    dispatch(fetchPostsStatus(categoryId));
    const offset = count * page;
    let url;
    if (categoryId === -1) {
        url = `${BASE_URL}/posts?page=${page}&limit=${count}&offset=${offset}`
    } else {
        url = `${BASE_URL}/categories/${categoryId}/posts?page=${page}&limit=${count}&offset=${offset}`
    }
    api
      .get(url)
      .then(res => {
          if (res.data.status === false) {
              dispatch(fetchPostsFailure(res.data.message, categoryId));
          } else {
              dispatch(fetchPostsSuccess(res.data, categoryId));
          }
      })
      .catch(error => {
          dispatch(fetchPostsFailure(error, categoryId));
      });
}

export const fetchPostsStatus = categoryId => ({
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

/* create new post */
export const createPost = post => dispatch => {
    api
        .post(`${BASE_URL}/posts`, JSON.stringify(post))
        .then(res => {
            if (res.data.status === false) {
                dispatch(createPostFailure(res.data.message));
            } else {
                dispatch(createPostSuccess(res.data));
            }
        })
        .catch(error => dispatch(createPostFailure(error)));
}


export const createPostSuccess = post => ({
    type: ACTION_TYPES.CREATE_POST_SUCCESS,
    payload: {
        post,
    },
});

export const createPostFailure = error => ({
    type: ACTION_TYPES.CREATE_POST_FAILURE,
    payload: {
        error,
    }
});

/* get a post by id */
export const getPost = id => dispatch => {
    api
        .get(`${BASE_URL}/posts/${id}`)
        .then(res => {
            if (res.data.status === false) {
                dispatch(createPostFailure(res.data.message));
            } else {
                dispatch(createPostSuccess(res.data));
            }
        })
        .catch(error => dispatch(createPostFailure(error)));
}


export const getPostSuccess = post => ({
    type: ACTION_TYPES.GET_POST_SUCCESS,
    payload: {
        post,
    },
});

export const getPostFailure = error => ({
    type: ACTION_TYPES.GET_POST_FAILURE,
    payload: {
        error,
    }
});
