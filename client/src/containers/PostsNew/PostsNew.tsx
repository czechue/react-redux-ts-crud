import React, { Component } from 'react';
import { FormValues, PostForm } from '../../components/PostForm/PostForm';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postsActions';
import { Post } from '../../reducers/postsReducer';

export type OwnPostsNewProps = {
    addPost: (post: Post) => void;
};

const initialValues: FormValues = {
    title: '',
    author: 'Anonymous'
};

class PostsNew extends Component<OwnPostsNewProps> {
    render() {
        if (!this.props.addPost) {
            return null;
        }
        return (
            <PostForm
                initialValues={initialValues}
                onSubmit={this.props.addPost}
            />
        );
    }
}

export default connect(
    null,
    { addPost }
)(PostsNew);
