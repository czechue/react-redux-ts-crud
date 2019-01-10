import React from 'react';
import { Post } from '../../reducers/postsReducer';
import { Link } from 'react-router-dom';

interface PostListItemProps {
    post: Post;
}

const PostsListItem = ({ post }: PostListItemProps) => (
    <div className="item">
        <div className="image">
            <img src="https://picsum.photos/300/200/?random" alt="none" />
        </div>
        <div className="content">
            <Link to={`/posts/${post.id}`} className="header">
                {post.title}
            </Link>
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

export default PostsListItem;
