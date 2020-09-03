import React from "react";
import Navbar from "./components/Navbar";
import { Link, withRouter } from "react-router-dom";
import bannerImage from "./assets/images/banner-image.png";
import bannerImage2 from "./assets/images/about-us.png";
import Service from "./components/Service";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Testimonal from "./components/Testimonal";
import logo from "./assets/images/github-logo.png";
import "./index.css";

function App() {
  

  const banner = () => {
    return (
      <div className="container mt-5 py-5 text-center" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5 py-5">
            <h3 className="title-text hey">
              Hey<span className="simple_line">________________@</span>
            </h3>
            <h1 className="title-text text-uppercase name">
              I am <span className="myname">Surendra</span>
            </h1>
            <h4 className="title-text text-uppercase freelancer mt-2">
              Freelance Developer
            </h4>
            <div className="mt-4">
              <a
                type="button"
                href="https://www.linkedin.com/in/surendra-vadaparthy-07b145193"
                rel="noopener noreferrer"
                target="_blank"
                className="mr-2 btn btn-rounded waves-effect contact-me"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12  col-xs-12 mb-1 mt-4">
            <img src={bannerImage} alt="person" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  };

  const secondBanner = () => {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 "
            data-aos="zoom-in"
          >
            <img src={bannerImage2} alt="about" className="img-fluid"></img>
          </div>

          <div
            className="col-lg-6 px-2 col-md-6 col-sm-12 col-xs-12 mt-1 text-center"
            data-aos="zoom-in"
          >
            <h2 className="text-uppercase py-3 px-5 head">
              <span>Let me </span>
              <span>introduce </span>
              <span>myself</span>
            </h2>
            <div className="paragraph">
              <p className="para">
                Hey ! I am SURENDRA VADAPARTHY a freelance developer
              </p>
              <p className="para">
                Efficient Engineer with an experience in creating mobile & web
                applications using Javascript & Flutter SDK. I like learning
                about other platforms such as backend and Android as well
                because it gives a wider view on problems that we solve for the
                customers. I focus on a high quality code ensured by following
                TDD approach. I really enjoy working in an oraganized
                environment. I speak Telugu,English,basic Hindi as well As a
                technical person I pay attention to details. I like creating my
                own applications and utilities in a spare time because I believe
                it is important to keep developing skills after hours and to
                share the results with a community. I post the updates and
                projects on my{" "}
                <a
                  href="https://github.com/surendravj"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github{" "}
                </a>
                account and we can also follow me up on{" "}
                <a
                  href="https://www.instagram.com/surendra_vadaparthy/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>{" "}
                . You can connect with me through{" "}
                <a
                  href="https://www.linkedin.com/in/surendra-vadaparthy-07b145193"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Linkedin
                </a>
                .
              </p>
            </div>
            <button
              type="button"
              className="btn btn-outline-dark btn-cv text-uppercase mt-3 mb-2"
            >
              <Link to="/resume" className="btn-cv">
                Look my cv
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const footer = () => {
    return (
      <footer className="page-footer footer text-center text-md-left mt-2 py-2">
        <div className="container-fluid text-center">
          <a
            href="https://github.com/surendravj"
            className="btn btn-outline-warning"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="mr-1">
              <img className="mr-1" src={logo} alt="avatar"></img>
            </span>
            Follow me on Github
          </a>
        </div>
      </footer>
    );
  };

  return (
    <div>
      <div className="container">
        <Navbar />
        {banner()}
        <hr></hr>
        {secondBanner()}
        <hr></hr>
        <Skill />
        <hr></hr>
        <Service />
        <hr></hr>
        <Testimonal />
        <hr></hr>
        <Contact />
      </div>
      {footer()}
    </div>
  );
}

export default withRouter(App);
