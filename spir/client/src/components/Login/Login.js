import React, { Component } from 'react'

class Login extends Component {

  state: {
    username: "",
    password: ""
  }

  handleSubmit(event) {
    event.preventDefault();

    let e = event.target

    const credentials = {
      username: e.username.value,
      password: e.password.value
    }

    // console.log(credentials);

    //Call OAuth here!

  }

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <input placeholder='Username' name='username' type='text' /><br/>
          <input placeholder='Password' name='password' type='password' /><br />
          <button text='Submit'>Login</button>
        </form>
      </div>
    );
  }
}

export default Login