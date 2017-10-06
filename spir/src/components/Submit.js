import React from "react";
import { browserHistory, FieldGroup } from "react-router-dom";
import { Button } from 'react-bootstrap';

export class Submit extends React.Component {

    render() {
        return (

  <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Text"
      placeholder="Enter text"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FieldGroup
      id="formControlsPassword"
      label="Password"
      type="password"
    />
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    />

    

    <Button type="submit">
      Submit
    </Button>
  </form>
)
    }
};

// export default Submit;