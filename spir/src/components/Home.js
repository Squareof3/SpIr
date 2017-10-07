import React from 'react';

class Home extends React.Component {

  render() {
    return(
      <div className="container">

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8" id="home" >Trending
          </div>
          <div className="col-md-2"></div>
        </div>

      </div>
    );
  }
}//class Main

const styles = {
  gallery: {
    borderStyle: 'solid',
    margin: '20px',
    borderRadius: '20px'
  }
}

export default Home;