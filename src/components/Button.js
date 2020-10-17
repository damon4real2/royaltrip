import React from 'react';
import { Button } from 'reactstrap';
import './Button.css'
const Example = (props) => {
  return (
    <div className="button1">
      <Button className="sign-up">Sign up to ride</Button>{' '}
      <Button className="apply">Apply to drive</Button>{' '}
      <Button className="help" outline color="secondary-lg">Help line</Button>{' '}
      <Button className="talk" outline color="secondary-lg">Talk to us</Button>{' '}
    </div>
  );
}

export default Example;