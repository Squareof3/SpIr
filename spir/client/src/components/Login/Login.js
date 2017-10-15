import React, { Component } from 'react'
import './Login.css';

class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.href = '/submit'

    let e = event.target

    const credentials = {
      username: e.username.value,
      password: e.password.value
    }

    console.log(credentials);

    //Call OAuth here!

  }

  render() {
    return (
      <center>
      <div>
        <h1 className="Title">Login</h1>

        <form className='loginForm' onSubmit={this.handleSubmit}>
          <input placeholder='Username' name='username' type='text' /><br/>
          <input placeholder='Password' name='password' type='password' /><br />
          <button onSubmit={this.handleSubmit} text='Submit'>Login</button>
        </form>
      </div>
      </center>
    );
  }
}

export default Login