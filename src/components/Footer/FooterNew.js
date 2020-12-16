import React from "react";
import "./FooterNew.css";

function FooterNew() {
  return (
      <div className="container-fluid FooterNew">
          <div className="row">
            <div className="col-4 FooterImg">
              <img className="" src={require("./assets/images/logo.svg")} alt="flexbox" /><br></br>
              <div className="app_store-google_play">
                <img className="" src={require("./assets/images/app-store.svg")} alt="flexbox" />
                <img className="" src={require("./assets/images/google-play.svg")} alt="flexbox" /><br></br>
              </div>
              <div className="question_1">
                <img src={require("./assets/images/question.png")} alt="flexbox" />
                <p>help center</p>
              </div>
              <br></br>
              <div className="container social_link">
                <div className="row">
                  <div className="col">
                    <img src={require("./assets/images/fb.png")} alt="flexbox" />
                  </div>
                  <div className="col">
                    <img src={require("./assets/images/twit.png")} alt="flexbox" />
                  </div>
                  <div className="col">
                    <img src={require("./assets/images/inst.png")} alt="flexbox" />
                  </div>
                  <div className="col">
                    <img src={require("./assets/images/youT.png")} alt="flexbox" />
                  </div>
                  <div className="col">
                    <img src={require("./assets/images/pint.png")} alt="flexbox" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 FooterLinks">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h1>our company</h1>
                    <a className="d-flex justify-content-center" href="/">about us</a>
                    <a className="d-flex justify-content-center" href="/">contact us</a>
                    <a className="d-flex justify-content-center" href="/">FAQ</a>
                    <a className="d-flex justify-content-center" href="/">privacy policy</a>
                  </div>
                  <div className="col">
                    <h1>for riders</h1>
                    <a className="d-flex justify-content-center" href="/">sign in</a>
                    <a className="d-flex justify-content-center" href="/">sign up</a>
                    <a className="d-flex justify-content-center" href="/">Find a driver</a>
                    <a className="d-flex justify-content-center" href="/">cities</a>
                  </div>
                  <div className="col">
                    <h1>for drivers</h1>
                    <a className="d-flex justify-content-center" href="/">sign in</a>
                    <a className="d-flex justify-content-center" href="/">sign up</a>
                    <a className="d-flex justify-content-center" href="/">why join us?</a>
                    <a className="d-flex justify-content-center" href="/">cities</a>
                  </div>
                  <div className="col">
                    <h1>help</h1>
                    <a className="d-flex justify-content-center" href="/">forum</a>
                    <a className="d-flex justify-content-center" href="/">blog</a>
                    <a className="d-flex justify-content-center" href="/">talk to us</a>
                    <a className="d-flex justify-content-center" href="/">help line</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}
export default FooterNew;