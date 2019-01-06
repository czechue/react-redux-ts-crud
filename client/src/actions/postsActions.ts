import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import posts from '../api';
import { RootState, RootActions } from '../store';
import { Post, Posts } from '../reducers/postsReducer';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;

export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL',
    FETCH_POST = 'FETCH_POST',
    FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
    FETCH_POST_FAIL = 'FETCH_POST_FAIL'
}

interface FetchPosts {
    type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccess {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: Posts;
}

interface FetchPostsFail {
    type: PostsActionTypes.FETCH_POSTS_FAIL;
}

interface FetchPost {
    type: PostsActionTypes.FETCH_POST;
}

interface FetchPostSuccess {
    type: PostsActionTypes.FETCH_POST_SUCCESS;
    payload: Post;
}

interface FetchPostFail {
    type: PostsActionTypes.FETCH_POST_FAIL;
}

export const fetchPosts = (): ThunkResult<void> => async dispatch => {
    handleFetchPosts(dispatch);
    try {
        const response = await posts.get('/posts');
        handleFetchPostsSuccess(dispatch, response.data);
    } catch (e) {
        handleFetchPostsFail(dispatch);
    }
};

export const fetchPost = (id: number): ThunkResult<void> => async dispatch => {
    handleFetchPost(dispatch);
    try {
        const response = await posts.get(`/posts/${id}`);
        handleFetchPostSuccess(dispatch, response.data);
    } catch (e) {
        handleFetchPostFail(dispatch);
    }
};

const handleFetchPosts = (dispatch: Dispatch) => {
    dispatch({ type: PostsActionTypes.FETCH_POSTS });
};

const handleFetchPostsSuccess = (dispatch: Dispatch, response: Posts) => {
    dispatch({
        type: PostsActionTypes.FETCH_POSTS_SUCCESS,
        payload: response
    });
};

const handleFetchPostsFail = (dispatch: Dispatch) => {
    dispatch({
        type: PostsActionTypes.FETCH_POSTS_FAIL
    });
};

const handleFetchPost = (dispatch: Dispatch) => {
    dispatch({ type: PostsActionTypes.FETCH_POST });
};

const handleFetchPostSuccess = (dispatch: Dispatch, response: Post) => {
    dispatch({
        type: PostsActionTypes.FETCH_POST_SUCCESS,
        payload: response
    });
};

const handleFetchPostFail = (dispatch: Dispatch) => {
    dispatch({
        type: PostsActionTypes.FETCH_POST_FAIL
    });
};

export type PostsAction =
    | FetchPosts
    | FetchPostsSuccess
    | FetchPostsFail
    | FetchPost
    | FetchPostSuccess
    | FetchPostFail;
