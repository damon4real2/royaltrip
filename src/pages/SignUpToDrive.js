// import React from 'react';
// import { Button } from 'reactstrap';
// import SignUpToDriveForm1 from "../components/SignUpToDriveForm1"
// import '../App.css';

// class SignUpToDrive extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         currentStep: 1,
//         phoneNo:  '',
//         verificationCode: '',
//         confirmVerificationCode: '', 
//       }
//     }
  
//     handleChange = event => {
//       const {name, value} = event.target
//       this.setState({
//         [name]: value
//       })    
//     }
     
//     handleSubmit = event => {
//       event.preventDefault()
//       const { phoneNo, verificationCode, confirmVerificationCode } = this.state
//       alert(`Your registration detail: \n 
//              phoneNo: ${phoneNo} \n 
//              verificationCode: ${verificationCode} \n
//              confirmVerificationCode: ${confirmVerificationCode}`)
//     }
    
//     _next = () => {
//       let currentStep = this.state.currentStep
//       currentStep = currentStep >= 2? 3: currentStep + 1
//       this.setState({
//         currentStep: currentStep
//       })
//     }
      
  
//   /*
//   * the functions for our button
//   */
 
  
//   next_SignUp(){
//     let currentStep = this.state.currentStep;
//     if(currentStep <3){
//       return (
//         <button 
//           className="btn btn-primary float-right" 
//           type="button" onClick={this._next}>
//         Next
//         </button>        
//       )
//     }
//     return null;
//   }
    
//     render() {    
//       return (
//         <React.Fragment>
//         {/* <h1>React Wizard Form 🧙‍♂️</h1>
//         <p>Step {this.state.currentStep} </p>  */}
//         <div className="SignUpToDrive">
//                 <div className="row">
//                     <div className="col-7">
//                         <div className="logInImg">
//                             <img className='signUpToDriveImg' src={require("../assets/images/drive-with-royal-trip.jpg")} alt={'sign-up'}/>
//                             <Button className="signUpToDriveButton">
//                                 log in
//                             </Button>{' '}
//                         </div>   
//                     </div> 
//                     <div className="col-5">
//                         <SignUpToDriveForm1 />
//                     </div>
//                 </div>
//         </div>
//         <form onSubmit={this.handleSubmit}>
//         {/* 
//           render the form steps and pass required props in
//         */}
//           <Step1 
//             currentStep={this.state.currentStep} 
//             handleChange={this.handleChange}
//             phoneNo={this.state.phoneNo}
//           />
//           <Step2 
//             currentStep={this.state.currentStep} 
//             handleChange={this.handleChange}
//             verificationCode={this.state.verificationCode}
//           />
//           <Step3 
//             currentStep={this.state.currentStep} 
//             handleChange={this.handleChange}
//             confirmVerificationCode={this.state.confirmVerificationCode}
//           />
//           {this.next_SignUp()}
  
//         </form>
//         </React.Fragment>
//       );
//     }
//   }
  
//   function Step1(props) {
//     if (props.currentStep !== 1) {
//       return null
//     } 
//     return(
//       <div className="form-group">
//         {/* <label htmlFor="phoneNo">phoneNo address</label>
//         <input
//           className="form-control enterNo_SignUp"
//           id="number"
//           name="number"
//           type="text"
//           placeholder="Mobile Phone Number"
//           value={props.phoneNo}
//           onChange={props.handleChange}
//         /> */}
//       </div>
//     );
//   }
  
//   function Step2(props) {
//     if (props.currentStep !== 2) {
//       return null
//     } 
//     return(
//       <div className="form-group">
//         {/* <label htmlFor="verificationCode">verificationCode</label>
//         <input
//           className="form-control"
//           id="verificationCode"
//           name="verificationCode"
//           type="text"
//           placeholder="Enter verificationCode"
//           value={props.verificationCode}
//           onChange={props.handleChange}
//           /> */}
//       </div>
//     );
//   }
  
//   function Step3(props) {
//     if (props.currentStep !== 3) {
//       return null
//     } 
//     return(
//       <React.Fragment>
//       <div className="form-group">
//         <label htmlFor="confirmVerificationCode">confirmVerificationCode</label>
//         <input
//           className="form-control"
//           id="confirmVerificationCode"
//           name="confirmVerificationCode"
//           type="confirmVerificationCode"
//           placeholder="Enter confirmVerificationCode"
//           value={props.confirmVerificationCode}
//           onChange={props.handleChange}
//           />      
//       </div>
//       {/* <button className="btn btn-success btn-block">Sign up</button> */}
//       </React.Fragment>
//     );
//   }
  

// export default SignUpToDrive;



import React, {Component} from 'react';
import '../App.css';
// import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import SignUpToDriveForm1 from '../components/SignUpToDriveForm1';
import { Link } from 'react-router-dom';

class SignUpToDrive extends Component {
  render() {
    return (
        <div className="SignUpToDrive">
            <div className="row">
                <div className="col-7">
                    <div className="logInImg">
                        <img className='signUpToDriveImg' src={require("../assets/images/rca-bg.jpg")} alt={'sign-up'}/>
                        {/* <img className='signUpToDriveImg' src={require("../assets/images/drive-with-royal-trip.svg")} alt={'sign-up'}/> */}
                        <Button className="signUpToDriveButton">
                            <Link to="/logIn">
                             log in
                            </Link>
                        </Button>{' '}
                    </div>   
                </div> 
                <div className="col-5">
                  <SignUpToDriveForm1 />
                </div>
            </div>
     </div>
    );
  }
}

export default SignUpToDrive;