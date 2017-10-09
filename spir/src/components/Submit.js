import React from 'react'

import './submit.css'


class Submit extends React.Component {

  removeSpir(index) {
    let spirs = this.state.spirs;

    let spir = spirs.find(function(spir) {
      return spir.counter === index
    });

    spirs.splice(spir, 1);

    this.setState({
      spirs: spirs
    });

  }

  addSpir(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let place = this.refs.place.value;
    let image = this.refs.image.value;
    let counter = this.state.counter;

    let spir ={
      name,
      place,
      image,
      counter
    };
    counter++;
    
    let spirs = this.state.spirs;

    spirs.push(spir);

    this.setState({
      spirs: spirs,
      counter:counter
    });

    this.refs.spirForm.reset ();

  }

  constructor() {
    super();
    this.addSpir = this.addSpir.bind(this);
    this.removeSpir = this.removeSpir.bind(this);
    this.state = {
      spirs: [],
      title: "Post your Image and Location",
      counter: 0
    }
  }

  render() {
    let title = this.state.title;
    let spirs = this.state.spirs;
    return (
      <center>
      <div className="container">
      <div className="jumbotron">
        <h1>{title}</h1>
        <form ref="spirForm">
          <input type="text" ref="name" placeholder="Username" /><br />
          <input type="text" ref="place" placeholder="Location provided by Google Maps" />
          <input name="file" ref="image" type="file" />
          <button onClick={this.addSpir}>Add Spir</button>
          </form>
          <ul>
            {spirs.map((spir => <li key={spir.counter}><br /><h3>Post Preview</h3>{spir.name}<br />{spir.place}<br />{spir.image} <hr />
            <button onClick={this.removeSpir.bind(null, spir.counter)}>Remove Spir</button></li>))}
          </ul>
          </div>
      </div>
      </center>

    )
  }
}


export default Submit


