import React, {Component} from 'react';
import { Button } from 'reactstrap';
import LogInForm from "../components/LogInForm"
import '../App.css';


class logIn extends Component {

  render() {
    return (
           <div className="logIn">
               <div className="row">
                <div className="col-7">
                        <div className="logInImg">
                            <img className='applyToDriveImg' src={require("../assets/images/signup-bg.jpg")} alt={'log-in'}/>
                            <Button className="applyToDrive">
                                Apply to Drive
                            </Button>{' '}
                        </div>   
                    </div> 
                    <div className="col-5">
                        <LogInForm />
                    </div>
                </div>
            </div>
        );
    }
}
export default logIn;