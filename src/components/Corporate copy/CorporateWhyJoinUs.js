import React from "react";
import "./CorporateWhyJoinUs.css";

function CorporateWhyJoinUs() {
  return (
      <div className="CorporateWhyJoinUs col-12">
        <h1>for corporate</h1>
        <p>Begin a business trip now, have seamless payments and access Trip Rewards for you and colleagues you refer.</p>
        <div class="container">
          <div class="row">
            <div class="col-sm aaaa">
              <img className="d-flex justify-content-center" src={require("./assets/images/icon_a.png")} alt="flexbox" /><br></br>
              <p2 className="d-flex justify-content-center aaaa_details">ride bonus</p2><br></br>
              <p1 className="d-flex justify-content-center">Unlock lots of cool bonuses when you ride with RoyalTrip.</p1>
            </div>
            <div class="col-sm aaaa">
              <img className="d-flex justify-content-center" src={require("./assets/images/icon_b.png")} alt="flexbox" /><br></br>
              <p2 className="d-flex justify-content-center aaaa_details">corporate trip</p2><br></br>
              <p1 className="d-flex justify-content-center">Forward ride invoice to your corporate email, or sync RoyalTrip to your corporate account to automatically expense your business rides.</p1>
            </div>
            <div class="col-sm aaaa">
            <img className="d-flex justify-content-center" src={require("./assets/images/icon_c.png")} alt="flexbox" /><br></br>
              <p2 className="d-flex justify-content-center aaaa_details">easy bill</p2><br></br>
              <p1 className="d-flex justify-content-center">Weary of uploading invoices? Simply sync your corporate card to pay for business rides directly — zero paperwork needed.</p1>
            </div>
            <div class="col-sm aaaa">
            <img className="d-flex justify-content-center" src={require("./assets/images/icon_d.png")} alt="flexbox" /><br></br>
              <p2 className="d-flex justify-content-center aaaa_details">invite coworkers</p2><br></br>
              <p1 className="d-flex justify-content-center">Riding together is more fun, and worth the reward. Refer colleagues at work to use RoyalTrip and earn a bonus for your personal rides.</p1>
            </div>
          </div>
        </div>
      </div>
  )
}
export default CorporateWhyJoinUs;
