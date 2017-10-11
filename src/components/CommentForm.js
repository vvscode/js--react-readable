import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class CommentForm extends Component {
  state = {};

  onSubmit = ev => {
    ev.preventDefault();
    const { author, body } = {
      ...this.props,
      ...this.state
    };
    this.props.onSubmit && this.props.onSubmit({ author, body });
    this.setState({ body: "" });
  };

  onChange = field => ev => this.setState({ [field]: ev.target.value });

  render() {
    const { author = "", body = "", id } = {
      ...this.props,
      ...this.state
    };
    return (
      <Form method="post" onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Author</label>
          <input
            placeholder="Author"
            value={author}
            disabled={!!id}
            required
            onChange={this.onChange("author")}
          />
        </Form.Field>
        <Form.Field>
          <label>Comment</label>
          <textarea
            name="body"
            required
            value={body}
            onChange={this.onChange("body")}
          />
        </Form.Field>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default CommentForm;
