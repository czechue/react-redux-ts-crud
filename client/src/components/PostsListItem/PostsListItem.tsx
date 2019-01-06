import React from 'react';
import { Post } from '../../reducers/postsReducer';

const PostsListItem = ({ post }: { post: Post }) => {
    return (
        <div className="item">
            <div className="image">
                <img src="https://picsum.photos/300/200/?random" />
            </div>
            <div className="content">
                <a className="header">{post.title}</a>
                <div className="meta">
                    <span>Description</span>
                </div>
                <div className="description">
                    <p />
                </div>
                <div className="extra">Author: {post.author}</div>
            </div>
        </div>
    );
};

export default PostsListItem;
