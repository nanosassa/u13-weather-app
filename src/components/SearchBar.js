import React, { Component } from "react";
import "../css/SearchBar.css";
import { Input, Message, Form } from "semantic-ui-react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      warning: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendValueToParent = this.sendValueToParent.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  sendValueToParent(event) {
    this.props.callBackFromParent(this.state.value);
    this.setState({ warning: false });
  }

  render() {
    const errorMessage = (
      <Message error header="There was an error" content={this.props.error} />
    );

    const warningMessage = (
      <Message warning header="Please check that you've entered a valid place" />
    );

    return (
      <div className="SearchBar">
        {this.props.error && errorMessage}
        {this.state.warning && warningMessage}
        <Form onSubmit={this.sendValueToParent}>
          <Input
            className="SearchBar-input"
            placeholder="Search the weather in..."
            action={{ icon: "search" }}
            onChange={this.handleChange}
            value={this.state.value}
            size="huge"
            type="text"
            autoFocus
          />
        </Form>
      </div>
    );
  }
}

export default SearchBar;
