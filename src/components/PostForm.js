import React, { Component } from "react";
import { Form, Button, Select } from "semantic-ui-react";
import { connect } from "react-redux";

export class PostForm extends Component {
  state = {
    categories: []
  };

  onSubmit = ev => {
    ev.preventDefault();
    const { category = this.getDefaultCategory(), author, body, title } = {
      ...this.props,
      ...this.state
    };
    this.props.onSubmit &&
      this.props.onSubmit({ category, author, body, title });
  };

  getDefaultCategory() {
    if (this.props.categories.length) {
      return this.props.categories[0].name;
    }
    return null;
  }

  onChange = field => ev => this.setState({ [field]: ev.target.value });

  render() {
    const categories = this.props.categories.map(({ name }) => ({
      key: name,
      value: name,
      text: name
    }));
    const isEditMode = !!this.props.id;
    let { author, title, body, category } = { ...this.props, ...this.state };
    category = category || this.getDefaultCategory();
    const onChange = this.onChange;
    return (
      <Form method="post" onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Author</label>
          <input
            placeholder="Author"
            disabled={isEditMode}
            value={author}
            onChange={onChange("author")}
          />
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <Select
            disabled={isEditMode}
            value={category}
            placeholder="Select category"
            options={categories}
            onChange={onChange("category")}
          />
        </Form.Field>
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            value={title}
            onChange={onChange("title")}
          />
        </Form.Field>
        <Form.Field>
          <label>Post</label>
          <textarea name="body" value={body} onChange={onChange("body")} />
        </Form.Field>
        <Button>{isEditMode ? "Save" : "Post"}</Button>
      </Form>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});

export default connect(mapStateToProps)(PostForm);
