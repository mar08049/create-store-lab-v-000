import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange(event) {
    this.setState({
      // this in brackets allows us to handle both fields through
      //one form. Could also have built two separate handlers
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" name="username" value={this.state.username} onChange={(event) => this.handleChange(event)}/>
          <input type="text" name="hometown" value={this.state.hometown} onChange={(event) => this.handleChange(event)}/>
          <button type="submit"></button>
        </form>
      </div>
    );
  }
};

export default UserInput;
