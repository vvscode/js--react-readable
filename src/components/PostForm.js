import React, { Component } from "react";
import { Form, Button, Select } from "semantic-ui-react";
import { connect } from "react-redux";

export class PostForm extends Component {
  state = {
    categories: []
  };
  constructor(props) {
    super(props);

    const { category, author, body, title } = props;
    this.state = {
      category,
      author,
      body,
      title
    };
  }

  onSubmit = ev => {
    ev.preventDefault();
    const {
      category = this.getDefaultCategory(),
      author,
      body,
      title
    } = this.state;
    this.props.onSubmit &&
      this.props.onSubmit({ category, author, body, title });
  };

  getDefaultCategory() {
    if (this.props.categories.length) {
      return this.props.categories[0].name;
    }
    return null;
  }

  onChange = field => ev => this.setState({ [field]: ev.target.valu });

  render() {
    const categories = this.props.categories.map(({ name }) => ({
      key: name,
      value: name,
      text: name
    }));
    const category = this.state.category || this.getDefaultCategory();
    return (
      <Form method="post" onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Author</label>
          <input
            placeholder="Author"
            value={this.state.author}
            onChange={this.onChange("author")}
          />
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <Select
            value={category}
            placeholder="Select category"
            options={categories}
            onChange={this.onChange("category")}
          />
        </Form.Field>
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            value={this.state.title}
            onChange={this.onChange("title")}
          />
        </Form.Field>
        <Form.Field>
          <label>Post</label>
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.onChange("body")}
          />
        </Form.Field>
        <Button>Post</Button>
      </Form>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});

export default connect(mapStateToProps)(PostForm);
