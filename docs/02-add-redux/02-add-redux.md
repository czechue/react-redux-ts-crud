```html
yarn add redux react-redux redux-thunk axios @types/redux @types/react-redux @types/redux-thunk @types/axios
```

```typescript

// actions/favorite.ts

import { ThunkAction } from 'redux-thunk';
import { RootState, RootActions } from '../store';
import { Action } from 'redux';
import { FavoriteItems, Favorite } from '../reducers/favorite.js';
import { RootState } from '../store.js';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;

export enum FavoriteActionTypes {
  INVALIDATE_FAVORITES = 'INVALIDATE_FAVORITES'
}

interface InvalidateFavorites {
  type: FavoriteActionTypes.INVALIDATE_FAVORITES;
}

export const invalidateFavorites = (): ThunkResult<void> => (dispatch) => {
  dispatch({
    type: FavoriteActionTypes.INVALIDATE_FAVORITES
  });
};

export type FavoriteAction = InvalidateFavorites;


// reducers/favorite.ts

import { FavoriteAction, FavoriteActionTypes} from '../actions/favorite.js';
import { Reducer } from 'redux';
import { Story } from './story.js';

export interface Favorite {
  id: number;
  storyId: number;
  memberId: number;
  Story: Story;
}

export interface FavoriteItems {
  [id: number]: Favorite;
}

export interface FavoriteState {
  items: FavoriteItems;
  didInvalidate: boolean;
  isFetching: boolean;
}

const initialState = {
  items: {},
  didInvalidate: false,
  isFetching: false
};

export const favorite: Reducer<FavoriteState, FavoriteAction> = (state = initialState, action) => {
  switch (action.type) {
    case FavoriteActionTypes.INVALIDATE_FAVORITES:
      return {
        ...state,
        didInvalidate: true
      };
    case FavoriteActionTypes.REQUEST_FAVORITES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    case FavoriteActionTypes.RECEIVE_FAVORITES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.favorites,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};


// store.js

import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { favorite, FavoriteState } from './reducers/favorite.js';
import { FavoriteAction } from './actions/favorite.js';

export interface RootState {
  favorite: FavoriteState;
  //... and others
}
export type RootActions = FavoriteAction; // | PostAction | etc.

const rootReducer = combineReducers<RootState>({
  favorite
  //... and others
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, RootActions>))
);
```
