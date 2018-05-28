import { api } from '../tools/ajax-tool';
import { BASE_URL } from '../constants/urls';
import { ACTION_TYPES } from '../constants/action-types';

export const fetchCommentsByPost = postId => dispatch => {
    dispatch(fetchCommentsByPostStatus());
    const url = `${BASE_URL}/posts/${postId}/comments`
    api
      .get(url)
      .then(res => {
          if (res.data.status === false) {
              console.log('failure', res.data.message);
              dispatch(fetchCommentsByPostFailure(res.data.message, postId));
          } else {
              dispatch(fetchCommentsByPostSuccess(postId, res.data));
          }
      })
      .catch(error => {
          console.log('failure', error);
          dispatch(fetchCommentsByPostFailure(error, postId));
      });
}

export const fetchCommentsByPostStatus = postId => ({
    type: ACTION_TYPES.FETCH_COMMENTS_BY_POST,
    payload: {
        postId,
    },
});

export const fetchCommentsByPostSuccess = (postId, comments) => ({
    type: ACTION_TYPES.FETCH_COMMENTS_BY_POST_SUCCESS,
    payload: {
        postId,
        comments
    },
});

export const fetchCommentsByPostFailure = (error, postId) => ({
    type: ACTION_TYPES.FETCH_COMMENTS_BY_POST_FAILURE,
    payload: {
        postId,
        error,
    },
});

/* create new comment */
export const createComment = comment => dispatch => {
    api
        .post(`${BASE_URL}/comments`, JSON.stringify(comment))
        .then(res => {
            if (res.data.status === false) {
                dispatch(createCommentFailure(res.data.message));
            } else {
                dispatch(createCommentSuccess(res.data));
            }
        })
        .catch(error => dispatch(createCommentFailure(error)));
}


export const createCommentSuccess = comment => ({
    type: ACTION_TYPES.CREATE_COMMENT_SUCCESS,
    payload: {
        comment,
    },
});

export const createCommentFailure = error => ({
    type: ACTION_TYPES.CREATE_COMMENT_FAILURE,
    payload: {
        error,
    }
});

/* get comment by id */
export const deleteComment = id => dispatch => {
    api
        .delete(`${BASE_URL}/comments/${id}`)
        .then(res => {
            if (res.data.status === false) {
                dispatch(deleteCommentFailure(res.data.message));
            } else {
                dispatch(deleteCommentSuccess(id));
            }
        })
        .catch(error => {
            console.log('failure deleting');
            dispatch(deleteCommentFailure(error))
        });
}


export const deleteCommentSuccess = id => ({
    type: ACTION_TYPES.DELETE_COMMENT_SUCCESS,
    payload: {
        id,
    },
});

export const deleteCommentFailure = error => ({
    type: ACTION_TYPES.DELETE_COMMENT_FAILURE,
    payload: {
        error,
    }
});
