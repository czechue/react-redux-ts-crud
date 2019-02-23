import posts from '../api';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { RootState, RootActions } from '../store';
import { Post, Posts } from '../reducers/postsReducer';
import { AxiosResponse } from 'axios';
import history from '../history';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;
export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL',
    FETCH_POST = 'FETCH_POST',
    FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
    FETCH_POST_FAIL = 'FETCH_POST_FAIL',
    ADD_POST = 'ADD_POST',
    ADD_POST_SUCCESS = 'ADD_POST_SUCCESS',
    ADD_POST_FAIL = 'ADD_POST_FAIL',
    EDIT_POST = 'EDIT_POST',
    EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS',
    EDIT_POST_FAIL = 'EDIT_POST_FAIL',
    DELETE_POST = 'DELETE_POST',
    DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
    DELETE_POST_FAIL = 'DELETE_POST_FAIL'
}

// FETCH POSTS

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

export const fetchPosts = (): ThunkResult<void> => async dispatch => {
    handleFetchPosts(dispatch);
    try {
        const response: AxiosResponse<Post[]> = await posts.get('/posts');
        handleFetchPostsSuccess(dispatch, response.data);
    } catch (e) {
        handleFetchPostsFail(dispatch);
    }
};

export const handleFetchPosts = (dispatch: Dispatch<FetchPosts>) => {
    dispatch({ type: PostsActionTypes.FETCH_POSTS });
};

export const handleFetchPostsSuccess = (
    dispatch: Dispatch<FetchPostsSuccess>,
    response: Posts
) => {
    dispatch({
        type: PostsActionTypes.FETCH_POSTS_SUCCESS,
        payload: response
    });
};

export const handleFetchPostsFail = (dispatch: Dispatch<FetchPostsFail>) => {
    dispatch({
        type: PostsActionTypes.FETCH_POSTS_FAIL
    });
};

// FETCH POST

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

export const fetchPost = (id: number): ThunkResult<void> => async dispatch => {
    handleFetchPost(dispatch);
    try {
        const response: AxiosResponse<Post> = await posts.get(`/posts/${id}`);
        handleFetchPostSuccess(dispatch, response.data);
    } catch (e) {
        handleFetchPostFail(dispatch);
    }
};

export const handleFetchPost = (dispatch: Dispatch<FetchPost>) => {
    dispatch({ type: PostsActionTypes.FETCH_POST });
};

const handleFetchPostSuccess = (
    dispatch: Dispatch<FetchPostSuccess>,
    response: Post
) => {
    dispatch({
        type: PostsActionTypes.FETCH_POST_SUCCESS,
        payload: response
    });
};

const handleFetchPostFail = (dispatch: Dispatch<FetchPostFail>) => {
    dispatch({
        type: PostsActionTypes.FETCH_POST_FAIL
    });
};

// ADD POST

interface AddPost {
    type: PostsActionTypes.ADD_POST;
}

interface AddPostSuccess {
    type: PostsActionTypes.ADD_POST_SUCCESS;
    payload: Post;
}

interface AddPostFail {
    type: PostsActionTypes.ADD_POST_FAIL;
}

export const addPost = (post: Post): ThunkResult<void> => async dispatch => {
    handleAddPost(dispatch);
    try {
        const response: AxiosResponse<Post> = await posts.post(`/posts`, post);
        handleAddPostSuccess(dispatch, response.data);
    } catch (e) {
        handleAddPostFail(dispatch);
    }
};

const handleAddPost = (dispatch: Dispatch<AddPost>) => {
    dispatch({ type: PostsActionTypes.ADD_POST });
};

const handleAddPostSuccess = (
    dispatch: Dispatch<AddPostSuccess>,
    response: Post
) => {
    dispatch({ type: PostsActionTypes.ADD_POST_SUCCESS, payload: response });
    history.push('/');
};

const handleAddPostFail = (dispatch: Dispatch<AddPostFail>) => {
    dispatch({ type: PostsActionTypes.ADD_POST_FAIL });
};

// EDIT POST

interface EditPost {
    type: PostsActionTypes.EDIT_POST;
}

interface EditPostSuccess {
    type: PostsActionTypes.EDIT_POST_SUCCESS;
    payload: Post;
}

interface EditPostFail {
    type: PostsActionTypes.EDIT_POST_FAIL;
}

export const editPost = (
    editedPost: Post
): ThunkResult<void> => async dispatch => {
    handleEditPost(dispatch);
    try {
        const response: AxiosResponse<Post> = await posts.patch(
            `/posts/${editedPost.id}`,
            editedPost
        );
        handleEditPostSuccess(dispatch, response.data);
    } catch (e) {
        handleEditPostFail(dispatch);
    }
};

const handleEditPost = (dispatch: Dispatch<EditPost>): void => {
    dispatch({ type: PostsActionTypes.EDIT_POST });
};

const handleEditPostSuccess = (
    dispatch: Dispatch<EditPostSuccess>,
    editedPost: Post
) => {
    dispatch({ type: PostsActionTypes.EDIT_POST_SUCCESS, payload: editedPost });
    history.push('/');
};

const handleEditPostFail = (dispatch: Dispatch<EditPostFail>) => {
    dispatch({ type: PostsActionTypes.EDIT_POST_FAIL });
};

// DELETE POST

interface DeletePost {
    type: PostsActionTypes.DELETE_POST;
}

interface DeletePostSuccess {
    type: PostsActionTypes.DELETE_POST_SUCCESS;
    payload: number;
}

interface DeletePostFail {
    type: PostsActionTypes.DELETE_POST_FAIL;
}

export const deletePost = (
    deletedId: number
): ThunkResult<void> => async dispatch => {
    dispatch({ type: PostsActionTypes.DELETE_POST });
    try {
        await posts.delete(`/posts/${deletedId}`);
        dispatch({
            type: PostsActionTypes.DELETE_POST_SUCCESS,
            payload: deletedId
        });
        history.push('/');
    } catch (e) {
        dispatch({ type: PostsActionTypes.DELETE_POST_FAIL });
    }
};

export type PostsAction =
    | FetchPosts
    | FetchPostsSuccess
    | FetchPostsFail
    | FetchPost
    | FetchPostSuccess
    | FetchPostFail
    | AddPost
    | AddPostSuccess
    | AddPostFail
    | EditPost
    | EditPostSuccess
    | EditPostFail
    | DeletePost
    | DeletePostSuccess
    | DeletePostFail;
