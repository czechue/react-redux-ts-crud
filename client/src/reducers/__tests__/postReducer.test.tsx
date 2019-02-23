import { Post, Posts, postsReducer } from '../postsReducer';
import { PostsAction, PostsActionTypes } from '../../actions/postsActions';

describe('postsReducer initial actions', () => {
    const initialState = {
        items: {},
        loading: false,
        error: null
    };

    const actions: PostsActionTypes[] = [
        PostsActionTypes.FETCH_POST,
        PostsActionTypes.FETCH_POSTS,
        PostsActionTypes.ADD_POST,
        PostsActionTypes.EDIT_POST
    ];

    const expected = {
        items: {},
        loading: true,
        error: null
    };

    test.each(actions)('should handle %s', (action) => {
        const usedAction: PostsAction = { type: action };
        const actual = postsReducer(initialState, usedAction);
        expect(actual).toEqual(expected);
    });
});

describe('postsReducer fail actions', () => {
    const initialState = {
        items: {},
        loading: true,
        error: null
    };

    const actions = [
        PostsActionTypes.FETCH_POST_FAIL,
        PostsActionTypes.FETCH_POSTS_FAIL,
        PostsActionTypes.ADD_POST_FAIL
    ];

    const expected = {
        items: {},
        loading: false,
        error: null
    };

    test.each(actions)('should handle %s', action => {
        const usedAction: PostsAction = { type: action };
        const actual = postsReducer(initialState, usedAction);
        expect(actual).toEqual(expected);
    });
});

describe('postsReducer post success actions', () => {
    const initialState = {
        items: {},
        loading: true,
        error: null
    };

    const actions = [
        PostsActionTypes.ADD_POST_SUCCESS,
        PostsActionTypes.FETCH_POST_SUCCESS
    ];

    const expected = {
        items: {
            1: {
                id: 1,
                title: 'title',
                author: 'author'
            }
        },
        loading: false,
        error: null
    };

    const payload: Post = {
        id: 1,
        title: 'title',
        author: 'author'
    };

    test.each(actions)('should handle %s', action => {
        const usedAction: PostsAction = { type: action, payload: payload };
        const actual = postsReducer(initialState, usedAction);
        expect(actual).toEqual(expected);
    });
});

describe('postsReducer posts fetch success action', () => {
    const initialState = {
        items: {},
        loading: true,
        error: null
    };

    const expected = {
        items: {
            1: {
                id: 1,
                title: 'title',
                author: 'author'
            },
            2: {
                id: 2,
                title: 'title2',
                author: 'author2'
            }
        },
        loading: false,
        error: null
    };

    const payload: Posts = {
        1: {
            id: 1,
            title: 'title',
            author: 'author'
        },
        2: {
            id: 2,
            title: 'title2',
            author: 'author2'
        }
    };

    test('should handle fetch posts success', () => {
        const usedAction: PostsAction = {
            type: PostsActionTypes.FETCH_POSTS_SUCCESS,
            payload: payload
        };
        const actual = postsReducer(initialState, usedAction);
        expect(actual).toEqual(expected);
    });
});

test('should handle fetch posts success', () => {
    const initialState = {
        items: {},
        loading: true,
        error: null
    };

    const expected = {
        items: {
            1: {
                id: 1,
                title: 'title',
                author: 'author'
            },
            2: {
                id: 2,
                title: 'title2',
                author: 'author2'
            }
        },
        loading: false,
        error: null
    };

    const payload: Posts = {
        1: {
            id: 1,
            title: 'title',
            author: 'author'
        },
        2: {
            id: 2,
            title: 'title2',
            author: 'author2'
        }
    };
    const usedAction: PostsAction = {
        type: PostsActionTypes.FETCH_POSTS_SUCCESS,
        payload: payload
    };
    const actual = postsReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
});

test('should handle delete post success', () => {
    const initialState = {
        items: {
            1: {
                id: 1,
                title: 'title',
                author: 'author'
            },
            2: {
                id: 2,
                title: 'title2',
                author: 'author2'
            }
        },
        loading: false,
        error: null
    };

    const expected = {
        items: {
            2: {
                id: 2,
                title: 'title2',
                author: 'author2'
            }
        },
        loading: false,
        error: null
    };

    const payload: number = 1;
    const usedAction: PostsAction = {
        type: PostsActionTypes.DELETE_POST_SUCCESS,
        payload: payload
    };
    const actual = postsReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
});
