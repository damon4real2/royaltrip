import React from "react";
// import {Link} from 'react-router-dom';
import "./Cities.css";

function CitiesRiders() {
  return (
      <div className="container CitiesRiders">
        <input className="find_search d-flex justify-content-center" type="text" placeholder="find your city" />
        <div className="text-right">
          <button className="select_countries">nigeria<img className="" src={require("./assets/images/arrow.png")} alt="flexbox" /></button>
        </div>
        <div className="container">
          <div className="row cities">
              <div className="col">
                <h1>lagos</h1>
                <div class="d-flex flex-row">
                  <div class="p-2">
                    <a href="/">maryland</a><br></br>
                    <a href="/">ikeja</a><br></br>
                    <a href="/">victoria island</a><br></br>
                    <a href="/">ikoyi</a><br></br>
                    <a href="/">surulere</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <h1>abuja</h1>
                <div class="d-flex flex-row">
                  <div class="p-2">
                    <a href="/">maitama</a><br></br>
                    <a href="/">garki</a><br></br>
                    <a href="/">zango city</a><br></br>
                    <a href="/">wuse</a><br></br>
                    <a href="/">asokoro</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <h1>port harcourt</h1>
                <div class="d-flex flex-row">
                  <div class="p-2">
                    <a href="/">oyibo</a><br></br>
                    <a href="/">bakana</a><br></br>
                    <a href="/">buguma</a><br></br>
                    <a href="/">ogoni</a><br></br>
                    <a href="/">oone</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <h1>kano</h1>
                <div class="d-flex flex-row">
                  <div class="p-2">
                    <a href="/">tofa</a><br></br>
                    <a href="/">zango</a><br></br>
                    <a href="/">faggae</a><br></br>
                    <a href="/">dala</a><br></br>
                    <a href="/">rimi</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <h1>kaduna</h1>
                <div class="d-flex flex-row">
                  <div class="p-2">
                    <a href="/">buruku</a><br></br>
                    <a href="/">kajuma</a><br></br>
                    <a href="/">kajuru</a><br></br>
                    <a href="/">katabu</a><br></br>
                    <a href="/">karu</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}
export default CitiesRiders;