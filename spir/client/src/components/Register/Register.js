import React, { Component } from 'react'
import axios from 'axios';
// var bcrypt = require('bcryptjs');
// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync("B4c0/\/", salt);

class Register extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.href = '/login'

    let e = event.target

    const credentials = {
      firstName: e.firstName.value,
      lastName: e.lastName.value,
      email: e.email.value,
      username: e.username.value,
      password: e.password.value
    }

    console.log(credentials);

    axios.post("/register", credentials, {
      firstName: e.firstName.value,
      lastName: e.lastName.value,
      email: e.email.value,
      username: e.username.value,
      password: e.password.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    //Call OAuth here!

  }

  render() {
    return (
      <center>
      <div>
        <h1 className="Title">Register</h1>

        <form className='loginForm' onSubmit={this.handleSubmit}>
          <input placeholder='First Name' name='firstName' type='text' /><br/>
          <input placeholder='Last Name' name='lastName' type='text' /><br/>
          <input placeholder='Email' name='email' type='email' /><br/>
          <input placeholder='Username' name='username' type='text' /><br/>
          <input placeholder='Password' name='password' type='password' /><br />
          <button onSubmit={this.handleSubmit} text='Submit'>Login</button>
        </form>
      </div>
      </center>
    );
  }
}

export default Register