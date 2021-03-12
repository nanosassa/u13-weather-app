import React, { Component } from "react";
import "../css/SearchBar.css";
import { Input, Dropdown, Message, Form } from "semantic-ui-react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      days: 1,
      warning: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendValueToParent = this.sendValueToParent.bind(this);
  }
  

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({ [name]: event.target.value });
  }

  handleChangeDD = (e, { value }) => this.setState({ days: value })

  sendValueToParent(event) {
    this.props.callBackFromParent(this.state.address, this.state.days);
    this.setState({ warning: false });
  }

  render() {
    const errorMessage = (
      <Message error header="There was an error" content={this.props.error} />
    );

    const warningMessage = (
      <Message warning header="Please check that you've entered a valid place" />
    );

    const Days = [
      { key: 1, text: '1', value: 1 },
      { key: 2, text: '2', value: 2 },
      { key: 3, text: '3', value: 3 },
      { key: 4, text: '4', value: 4 },
      { key: 5, text: '5', value: 5 },
      { key: 6, text: '6', value: 6 },
      { key: 7, text: '7', value: 7 }
    ]

    return (
      <div className="row">
        <div className="SearchBar">
          {this.props.error && errorMessage}
          {this.state.warning && warningMessage}
          <Form onSubmit={this.sendValueToParent}>
            <Input
              name="address"
              className="SearchBar-input"
              placeholder="Search the weather in..."
              action={{ icon: "search" }}
              onChange={this.handleChange}
              value={this.state.address}
              type="text"
              autoFocus
            />
             
            <Dropdown
              placeholder="days"
              name="days"
              className="SearchBar-select"
              options={Days}
              onChange={this.handleChangeDD}
              selection value={this.state.days} />
          </Form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
