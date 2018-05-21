import { api } from '../tools/ajax-tool';
import { BASE_URL } from '../constants/urls';
import { ACTION_TYPES } from '../constants/action-types';

export const fetchPosts = (categoryId = -1, count = 24, page = 0) => (dispatch) => {
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

/* create new post */

const post = {
  title: "new",
  subtitle: "subtitle",
  categoryId: 1,
  text: "text",
  imageUrl: "placeholder",
  userId: 1,
  excerpt: "nvfdjsnhsd"
}

export const createPost = (post) => {
    return (dispatch) => {
        api
            .post(`${BASE_URL}/posts`, post)
            .then(res => {
                if (res.data.status === false) {
                    console.info('error POST CREATE', res.data);
                    // dispatch(signInError(res.data.message));
                } else {
                    console.error('SUCESS POST CREATE', res.data);
                    // dispatch(signInSuccess(res.data));
                }
            })
            .catch(error => console.error('ERROR POST CREATE', error));
    }
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
