import React from 'react';
import "./Data.css";


function Data () {
    return (
      <div className="container Data">
        <div className="row">
    
          <div className="col">
            <h1>valuable data</h1>
            <p>Fleet management generates a lot of user data which becomes bulky for a fleet manager to adequately assess. This can result in huge time consumption and run the risk of missing valuable information. Keeping track of such information requires administrative time and financial implications too. We basically help you sort out this data with our data analyts which allows you to achieve more with less.</p>
          </div>
          <div className="col">
            <img className="data" src={require('./assets/images/data.png')} alt="data_img" />
          </div>
        </div>
      </div>
    );
}
export default Data;