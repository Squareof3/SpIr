import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


import Navbar from './components/Navbar';
import Home from './components/Home';
import Submit from './components/Submit';
import Rankings from './components/Rankings';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const BasicExample = () => (
  <Router>
    <div>
      <Navbar />

      <Route exact path="/" component={Home}/>
      <Route path="/submit" component={Submit}/>
      <Route path="/rankings" component={Rankings}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </div>
  </Router>
)

export default BasicExample