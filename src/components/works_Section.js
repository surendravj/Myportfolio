import React from "react";
import SB from "../assets/images/SB.png";
import Sauda from "../assets/images/Sauda.png";
import Veggies from "../assets/images/Veggies.png";
import Corona from "../assets/images/Corona.png";


const WorksSection = () => {
  return (
    <div className="container px-5 py-5 text-center">
      <h2 className="font-weight-bold">My Works</h2>
      <div className="row px-1 mb-2">
        <div className="col-md-6 mb-2">
          <a href="https://www.sbinteriorsolutions.net/">
            <img src={SB} alt="SB" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-6">
          <a href="https://app.sauda.co/">
            <img src={Sauda} alt="SB" className="img-fluid" />
          </a>
        </div>
      </div>
      <hr />
      <div className="row px-1 mt-3 mb-2">
        <div className="col-md-6 mb-2">
          <a href="https://veggiesbasket.com/">
            <img src={Veggies} alt="SB" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-6">
          <a href="https://surendradevcoronatracker.netlify.app/">
            <img src={Corona} alt="SB" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
