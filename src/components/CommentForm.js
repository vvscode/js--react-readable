import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    const { author = "John Doe", body = "Thx for your job" } = props;
    this.state = {
      author,
      body
    };
  }

  onSubmit = ev => {
    ev.preventDefault();
    const { author, body } = this.state;
    this.props.onSubmit && this.props.onSubmit({ author, body });
    this.setState({ body: "" });
  };

  onChange = field => ev => this.setState({ [field]: ev.target.valu });

  render() {
    return (
      <Form ref="form" onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Author</label>
          <input
            placeholder="Author"
            value={this.state.author}
            onChange={this.onChange("author")}
          />
        </Form.Field>
        <Form.Field>
          <label>Comment</label>
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.onChange("body")}
          />
        </Form.Field>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default CommentForm;
