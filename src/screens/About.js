import React from 'react';
import Navbar from '../components/Navbar';
import '../resume.css';
import banner from "../assets/images/Administrator.png";
const About = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-4 mb-4">

            </div>
            <br></br>
            <div className="w3-content w3-margin-top B mt-5">

                <div className="w3-row-padding">

                    {/* <!-- Left Column --> */}
                    <div className="w3-third">

                        <div className="w3-white w3-text-grey w3-card-4">
                            <div className="w3-display-container">
                                <img src={banner} className="profile img-fluid" alt="Avatar" />
                                <div className="w3-display-bottomleft w3-container w3-text-black">
                                    <h2>Jane Doe</h2>
                                </div>
                            </div>
                            <div className="w3-container mt-2">
                                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Freelance Developer</p>
                                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Hyderbad,India</p>
                                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>vadaparthysurendra@gmail.com</p>
                                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>9676258512</p>
                                <hr />

                                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                                <p>Programming</p>
                                <div className="w3-light-grey w3-round-xlarge w3-small">
                                    <div className="w3-container w3-center w3-round-xlarge w3-teal C">80%</div>
                                </div>
                                <p>Web development</p>
                                <div className="w3-light-grey w3-round-xlarge w3-small">
                                    <div className="w3-container w3-center w3-round-xlarge w3-teal D">
                                        <div className="w3-center w3-text-white">75%</div>
                                    </div>
                                </div>
                                <p>Mobile app development</p>
                                <div className="w3-light-grey w3-round-xlarge w3-small">
                                    <div className="w3-container w3-center w3-round-xlarge w3-teal E">65%</div>
                                </div>
                                <p>MS-office</p>
                                <div className="w3-light-grey w3-round-xlarge w3-small">
                                    <div className="w3-container w3-center w3-round-xlarge w3-teal F">80%</div>
                                </div>
                                <br />

                                <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                                <p>English</p>
                                <div className="w3-light-grey w3-round-xlarge w3-small">
                                    <div className="w3-container w3-center w3-round-xlarge w3-teal F">80%</div>
                                </div>
                                <p>Hindi</p>
                                <div className="w3-light-grey w3-round-xlarge w3-small">
                                    <div className="w3-container w3-center w3-round-xlarge w3-teal K">50%</div>
                                </div>
                                <br />
                            </div><br />
                        </div>
                        {/* <!-- End Left Column --> */}
                    </div>

                    {/* <!-- Right Column --> */}
                    <div className="w3-twothird mt-2">

                        <div className="w3-container w3-card w3-white w3-margin-bottom">
                            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                            <div className="w3-container">
                                <h5 className="w3-opacity"><b>Front End Developer / SB interior designs</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span className="w3-tag w3-teal w3-round">Completed</span></h6>
                                <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                                <hr />
                            </div>
                            <div className="w3-container">
                                <h5 className="w3-opacity"><b>Backend Developer / Veggies Basket</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014 -  <span className="w3-tag w3-teal w3-round">Completed</span></h6>
                                <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                                <hr />
                            </div>
                            <div className="w3-container">
                                <h5 className="w3-opacity"><b>Intern / Wipro</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012 -  <span className="w3-tag w3-teal w3-round">Completed</span></h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br />
                            </div>
                        </div>

                        <div className="w3-container w3-card w3-white">
                            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                            <div className="w3-container">
                                <h5 className="w3-opacity"><b>VNR VJIET</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2017 - 2021
                                <span className="w3-tag w3-teal w3-round ml-1">Current</span></h6>
                                <p>B-Tech final year </p>
                                <hr />
                            </div>
                            <div className="w3-container">
                                <h5 className="w3-opacity"><b>Sri Gayathri Junior College</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2015 - 2017</h6>
                                <p>Intermediate board</p>
                                <hr />
                            </div>
                            <div className="w3-container">
                                <h5 className="w3-opacity"><b>Wisdom Grammer High School</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2014 - 2015</h6>
                                <p>SSC Board</p><br />
                            </div>
                        </div>

                    </div>


                </div>


            </div>
        </div>


    );
}

export default About;