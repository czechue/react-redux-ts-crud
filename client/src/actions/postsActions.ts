import { ThunkAction } from 'redux-thunk';
import posts from '../api';
import { RootState, RootActions } from '../store';
import { Posts } from '../reducers/postsReducer';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;

export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS'
}

interface FetchPosts {
    type: PostsActionTypes.FETCH_POSTS;
    payload?: Posts;
}

export const fetchPosts = (): ThunkResult<void> => async dispatch => {
    const response = await posts.get('/posts');
    dispatch({ type: PostsActionTypes.FETCH_POSTS, payload: response.data });
};

export type PostsAction = FetchPosts;
