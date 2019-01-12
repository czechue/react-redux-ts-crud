import React, { Component } from 'react';
import { PostForm } from '../../components/PostForm/PostForm';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postsActions';
import { Post } from '../../reducers/postsReducer';

export type OwnPostsNewProps = {
    addPost: (post: Post) => void;
};
class PostsNew extends Component<OwnPostsNewProps> {
    render() {
        return <PostForm addPost={this.props.addPost} />;
    }
}

export default connect(
    null,
    { addPost }
)(PostsNew);
