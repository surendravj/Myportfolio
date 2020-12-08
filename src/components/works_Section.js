import React from "react";
import SB from "../assets/images/SB.png";
import Sauda from "../assets/images/Sauda.png";
import Veggies from "../assets/images/Veggies.png";
import Corona from "../assets/images/Corona.png";
import app from "../assets/images/app.png";
import app2 from "../assets/images/app2.jpeg";
import "../index.css";

const WorksSection = () => {
  return (
    <div className="container px-5 py-3 text-center">
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
      <hr />
      <div className="row px-3 mt-3 mb-2">
        <div className="col-md-6 mb-2">
          <a href="https://play.google.com/store/apps/details?id=com.veggiesbasket.shaw&hl=en_IN">
            <img src={app} alt="SB" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-3">
          <a href="https://github.com/surendravj/CoronaCenters">
            <img src={app2} alt="SB" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
