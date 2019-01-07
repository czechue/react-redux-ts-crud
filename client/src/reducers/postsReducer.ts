import _ from 'lodash';
import { PostsAction, PostsActionTypes } from '../actions/postsActions';
import { Reducer } from 'redux';

export interface Post {
    id: number;
    title: string;
    author: string;
}

export interface Posts {
    [id: number]: Post;
}

export interface PostsState {
    items: Posts;
    loading: boolean;
}

const initialState = {
    items: {},
    loading: false
};

export const postsReducer: Reducer<PostsState, PostsAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POST:
        case PostsActionTypes.FETCH_POSTS:
            return { ...state, loading: true };

        case PostsActionTypes.FETCH_POST_FAIL:
        case PostsActionTypes.FETCH_POSTS_FAIL:
            return { ...state, loading: false };

        case PostsActionTypes.FETCH_POST_SUCCESS:
            const { id } = action.payload;
            return {
                ...state,
                items: { ...state.items, [id]: action.payload },
                loading: false
            };

        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                items: { ...state.items, ..._.mapKeys(action.payload, 'id') },
                loading: false
            };

        default:
            return state;
    }
};
