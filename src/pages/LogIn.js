import React from 'react';
import ReactDOM from 'react-dom';
import "../components/css/form.css"

class LogIn extends React.Component {
  render() {
    return (
        <>
        <div style={{
            display: "flex",
        }}>
            <div style={{}}><img src={require('../assets/images/driver.png')} /></div>
            <form style={{
              marginLeft: "30px"
            }}>
            <img style={{
              marginTop: "10%"
            }} src={require('../assets/images/logo.svg')}></img>
                <h1 style={{
                  marginTop: "10%"
                }}>Welcome! Enter your number</h1>
                <p></p>
                <input
                type="text"
                />
            </form>
        </div>
        </>
    );
  }
}

export default LogIn;