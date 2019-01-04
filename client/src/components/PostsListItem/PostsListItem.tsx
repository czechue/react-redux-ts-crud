import React from 'react';

const PostsListItem = () => {
    return (
        <div className="item">
            <div className="image">
                <img src="https://picsum.photos/300/200/?random" />
            </div>
            <div className="content">
                <a className="header">Header</a>
                <div className="meta">
                    <span>Description</span>
                </div>
                <div className="description">
                    <p />
                </div>
                <div className="extra">Additional Details</div>
            </div>
        </div>
    );
};

export default PostsListItem;
