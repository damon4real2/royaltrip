import React, {Component} from 'react';
import { Button } from 'reactstrap';
import SignUpToDriveForm from "../components/SignUpToDriveForm"
import '../App.css';


class SignUpToDrive extends Component {

  render() {
    return (
        <div className="SignUpToDrive">
            <div className="row">
                <div className="col-7">
                    <div className="logInImg">
                        <img className='signUpToDriveImg' src={require("../assets/images/rca-bg.jpg")} alt={'sign-up'}/>
                        <Button className="signUpToDriveButton">
                            log in
                        </Button>{' '}
                    </div>   
                </div> 
                <div className="col-5">
                    <SignUpToDriveForm />
                </div>
            </div>
     </div>
    );
  }
}

export default SignUpToDrive;

// import React from 'react';
// import '../App.css';

// function SignUpToDrive() {
//     return (
//         <div className="SignUpToDrive">
//             Sign up to drive.
//         </div>
//     )
// }
// export default SignUpToDrive;