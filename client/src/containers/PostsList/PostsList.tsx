import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PostsListItem from '../../components/PostsListItem';
import { fetchPosts } from '../../actions/postsActions';
import { RootState } from '../../store';
import { Post } from '../../reducers/postsReducer';

export interface PostsListProps {
    posts: Post[];
    fetchPosts: () => any;
}

class PostsList extends Component<PostsListProps> {
    componentDidMount(): void {
        console.log(this.props);
        this.props.fetchPosts();
    }

    renderPosts() {
        const { posts } = this.props;
        if (!posts) {
            return null;
        }
        return posts.map((post: any) => {
            return <PostsListItem post={post} key={post.id} />;
        });
    }

    render() {
        return <div className="ui items">{this.renderPosts()}</div>;
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        posts: _.values(state.posts.items)
    };
};

export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostsList);
