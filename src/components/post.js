import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";
import PropTypes from "prop-types";

class Posts extends Component {
  state = {
    posts: []
  };
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <h2>Latest Posts</h2>
        {posts.map((post, i) => (
          <div
            key={i}
            class="d-flex flex-row bd-highlight mb-3"
            style={{ background: "cyan", borderRadius: "6px" }}
          >
            <div class="p-2 bd-highlight">
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
