import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }
    renderPost() {
        return _.map(this.props.posts, posts => {
            return (
                <li className="list-group-item" key={posts.id}>
                    <Link to={`/posts/${posts.id}`}>{posts.title}</Link>
                </li>
            )
        });
    }
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPost()}
                </ul>
            </div>
        );
    }
}

function mapStateToPros({posts}) {
    return { posts }
}
export default connect(mapStateToPros, { fetchPosts })(PostsIndex);