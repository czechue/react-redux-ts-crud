import React from 'react';
import ReactDOM from 'react-dom';

import PostsListItem from '../PostsListItem';
import { Router } from 'react-router-dom';
import history from '../../history';

test('title', () => {
    const post = {
        id: 142,
        title: 'titleX',
        author: 'man zz'
    };

    const container = document.createElement('div');
    ReactDOM.render(
        <Router history={history}>
            <PostsListItem post={post} />
        </Router>,
        container
    );
    expect(container.textContent).toMatch('titleX');
    expect(container.textContent).toMatch('man zz');
});
