import React from 'react';
import './Home.css';
import './logo.PNG';

class Home extends React.Component {

  render() {
    return(
      <center>
        <div className="container">
          <h1 className="logo">SpIr</h1> 

 
          <div className="jumbotron">
            <h1>Trending</h1>      
            <p>Checkout the latest posts on SpIr</p>
          </div>
           <p>This is some text.</p>      
            <p>This is another text.</p>      
        </div>
      </center>
    );
  }
}



export default Home;