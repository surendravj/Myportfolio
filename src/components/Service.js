import React from 'react';
import '../index.css';
import s1 from "../assets/images/s1.png";
import s2 from "../assets/images/s2.png";
import s3 from "../assets/images/s3.png";
import s4 from "../assets/images/s4.png";

const Service = () => {
    return (
        <div className="container py-1 px-4 text-center mb-2 " data-aos="zoom-in">
            <h3 className="service-head">My services & offers</h3>
            <div className="row header py-4 px-2">
                <div className="col-lg-3  col-md-3 col-sm-6 col-xs-4 mb-3">
                    <div className="card service">
                        <div className="card-header">
                            <p className="lead">Web development</p>
                        </div>
                        <div className="card-body">
                            <img src={s1} alt="avatar" className="img-fluid"></img>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-4 mb-3">
                    <div className="card service-2 ">
                        <div className="card-header">
                            <p className="lead">App development</p>
                        </div>
                        <div className="card-body">
                            <img src={s2} alt="avatar" className="img-fluid"></img>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-4 mb-3">
                    <div className="card service">
                        <div className="card-header">
                            <p className="lead">Plan & design</p>
                        </div>
                        <div className="card-body">
                            <img src={s3} alt="avatar" className="img-fluid"></img>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-4 mb-3">
                    <div className="card service-2 ">
                        <div className="card-header">
                            <p className="lead">Faster integration</p>
                        </div>
                        <div className="card-body">
                            <img src={s4} alt="avatar" className="img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
