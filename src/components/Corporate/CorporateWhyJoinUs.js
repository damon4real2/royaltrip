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
              <img className="d-flex justify-content-center" src={require("./assets/images/icon_a.png")} alt="flexbox" />
              <p className="aaaa_details">ride bonus</p>
              <p1>Unlock lots of cool bonuses when you ride with RoyalTrip.</p1>
            </div>
            <div class="col-sm aaaa">
              <img className="" src={require("./assets/images/icon_b.png")} alt="flexbox" />
              <p className="aaaa_details">corporate trip</p>
              <p1>Forward ride invoice to your corporate email, or sync RoyalTrip to your corporate account to automatically expense your business rides.</p1>
            </div>
            <div class="col-sm aaaa">
            <img className="" src={require("./assets/images/icon_c.png")} alt="flexbox" />
              <p className="aaaa_details">easy bill</p>
              <p1>Weary of uploading invoices? Simply sync your corporate card to pay for business rides directly — zero paperwork needed.</p1>
            </div>
            <div class="col-sm aaaa">
            <img className="" src={require("./assets/images/icon_d.png")} alt="flexbox" />
              <p className="aaaa_details">invite coworkers</p>
              <p1>Riding together is more fun, and worth the reward. Refer colleagues at work to use RoyalTrip and earn a bonus for your personal rides.</p1>
            </div>
          </div>
        </div>
      </div>
  )
}
export default CorporateWhyJoinUs;
