import React from 'react';
import "./ReduceCosts.css";


function ReduceCosts () {
    return (
      <div className="container ReduceCosts">
        <div className="row">
          <div className="col">
            <h1>Reduce costs</h1>
            <p>Do not bother about Spending on advertising for your fleet, we help you with marketing to promote your business.</p>
          </div>
          <div className="col">
            <img src={require('./assets/images/reduceCosts.png')} alt="ReduceCosts_img" />
          </div>
        </div>
      </div>
    );
}
export default ReduceCosts;