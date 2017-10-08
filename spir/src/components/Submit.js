import React from 'react'
import { Prompt } from 'react-router-dom'



class Submit extends React.Component {
  state = {
    isBlocking: false
  }

  render() {
    const { isBlocking } = this.state

    return (
      <center>
      <div className="container">
      <div className="jumbotron">
        
      <form
        onSubmit={event => {
          event.preventDefault()
          event.target.reset()
          this.setState({
            isBlocking: false
          })
        }}
      >
        <Prompt
          when={isBlocking}
          message={location => (
            `Are you sure you want to go to ${location.pathname}`
          )}
        />
      
        <p>
          Input Location 
        </p>

        <p>
          <input
            size="50"
            placeholder="Location Hosted by Google Maps"
            onChange={event => {
              this.setState({
                isBlocking: event.target.value.length > 0
              })
            }}
          />
        </p>
        <br/> 
        <br/> 
        <input name="file" type="file" multiple />

        <br/>
        <br/>     
        <p>
          <button>Submit</button>
        </p>
      </form>

      </div>
      </div>
      </center>

  );
}
}


export default Submit


