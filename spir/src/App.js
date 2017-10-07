import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Submit from './components/Submit';
import Rankings from './components/Rankings';

const BasicExample = () => (
  <Router>
    <div>
      <Navbar />

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/submit" component={Submit}/>
      <Route path="/rankings" component={Rankings}/>
    </div>
  </Router>
)
export default BasicExample