import React from 'react';
import Navbar from "./components/Navbar";
import {Link} from "react-router-dom";
import bannerImage from "./assets/images/banner-image.png";
import bannerImage2 from "./assets/images/about-us.png";
import './index.css';

function App() {
  const banner = () => {
    return (<div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5 py-5" data-aos="fade-right">
          <h3 className="title-text hey">Hey<span className="simple_line">________________@</span></h3>
          <h1 className="title-text text-uppercase name">I am <span className="myname">Surendra</span></h1>
          <h4 className="title-text text-uppercase freelancer mt-2">Freelance Developer</h4>
          <div className="mt-4">
            <button type="button" className="mr-2 text-uppercase pressDown ">hire
                                    me</button>
            <button type="button" className="btn btn-outline-info text-uppercase buttonLeft">Get cv</button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12  col-xs-12 mb-1 mt-md-4" data-aos="fade-right">
          <img src={bannerImage} alt="person" className="img-fluid" />
        </div>
      </div>
    </div>)
  }

  const secondBanner = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 colxs-12 " data-aos="fade-right">
            <img src={bannerImage2} alt="about" className="img-fluid"></img>
          </div>

          <div className="col-lg-6 px-2 col-md-6 col-sm-12 col-xs-12 mt-1 text-center" data-aos="fade-left">
            <h2 className="text-uppercase py-3 px-5 head">
              <span>Let me </span>
              <span>introduce </span>
              <span>myself</span>
            </h2>
            <div className="paragraph">
              <p className="para">
                Hey you ! I am SURENDRA VADAPARTHY a freelance developer who is computer & tech freak
                            </p>
              <p className="para">
                I am in persuing my final year Btech course in one the finest reputed college in Hyderbad. I am doing my major in Electronics and instrumention engineering.
                Most importantly i am foody and traveller too....<br></br>
                Coming to my technical background i am fullstack web developer and native mobile app developer also <br>
                </br>
              </p>
            </div>
            <button type="button" className="btn btn-outline-dark btn-cv text-uppercase mt-2 mb-2">
              <Link to="/resume" className="btn-cv">Look my cv</Link>
              </button>
          </div>
        </div>
      </div>);
  }



  return (
    <div>
      <Navbar />
      {banner()}
      <hr></hr>
      {secondBanner()}
      <hr></hr>
    </div>
  ); 
}

export default App;



