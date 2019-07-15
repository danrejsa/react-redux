import React, { Component } from "react";
import { createPost } from "../actions/postAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h2>Add Post</h2>
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="title">Title</label>
            <input
              class="form-control"
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={this.onChange}
            />
          </div>

          <div class="form-group">
            <label for="body">Body</label>
            <textarea
              class="form-control"
              rows="3"
              name="body"
              id="body"
              value={body}
              onChange={this.onChange}
            />
          </div>

          <button class="btn btn-primary" type="submit">submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
