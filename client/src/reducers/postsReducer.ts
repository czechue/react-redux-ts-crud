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
        case PostsActionTypes.FETCH_POSTS:
            console.log(action.payload);
            return { ...state, items: { ..._.mapKeys(action.payload, 'id') } };
        default:
            return state;
    }
};
