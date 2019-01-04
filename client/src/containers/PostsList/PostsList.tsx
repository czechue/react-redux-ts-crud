import React, { Component } from 'react';
import PostsListItem from '../../components/PostsListItem';

class PostsList extends Component {
    render() {
        return (
            <div className="ui items">
                <PostsListItem />
            </div>
        );
    }
}

export default PostsList;
