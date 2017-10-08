import React from 'react';


const Navbar = () => 

<nav className="navbar navbar-inverse">
<div className="container-fluid">
  <div className="navbar-header">
    <a className="navbar-brand" href="/">SpIr</a>
  </div>
  <ul className="nav navbar-nav">
    <li className="active"><a href="/">Home</a></li>
    <li><a href="/submit">Submit</a></li>
    <li><a href="/rankings">Rankings</a></li>
  </ul>
  <ul className="nav navbar-nav navbar-right">
    <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
  </ul>
</div>
</nav>


  export default Navbar;

