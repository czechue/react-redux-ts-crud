import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import posts from '../api';
import { RootState, RootActions } from '../store';
import { Posts } from '../reducers/postsReducer';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;

export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL',
    FETCH_POST = 'FETCH_POST',
    FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
    FETCH_POST_FAIL = 'FETCH_POST_FAIL',
}

interface FetchPosts {
    type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccess {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload?: Posts;
}

interface FetchPostsFail {
    type: PostsActionTypes.FETCH_POSTS_FAIL;
}

interface FetchPost {
    type: PostsActionTypes.FETCH_POST;
}

interface FetchPostSuccess {
    type: PostsActionTypes.FETCH_POST_SUCCESS;
    payload?: Posts;
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

export type PostsAction = FetchPosts | FetchPostsSuccess | FetchPostsFail;
