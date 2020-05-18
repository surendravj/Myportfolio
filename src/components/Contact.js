import React, { useState } from 'react';
import { saveCommentToDb } from '../API/API_helper';

const Contact = () => {
    const [buttonName, setbuttonName] = useState("Send");
    const [buttonStatus, setbuttonStatus] = useState(1);
    const [values, setvalues] = useState({
        name: "",
        comment: "",

    });

    const { name, comment } = values;

    const onHandleChange = name => event => {
        setvalues({ ...values, error: false, [name]: event.target.value })
    };

    const isButtonChange = (button) => {
        if (button === 1) {
            return (
                <button className="btn btn-block bg-primary  btn-md btn-rounded text-white" onClick={onFormSubmit}>{buttonName}</button>
            )
        }
        if (button === 2) {
            return (
                <button className="btn btn-block bg-success text-white btn-md btn-rounded" onClick={onFormSubmit}>{buttonName}</button>
            )
        }
        else {
            return (
                <button className="btn btn-block bg-danger btn-md btn-rounded text-white" onClick={onFormSubmit}>{buttonName}</button>
            )
        }
    }

    const onFormSubmit = event => {
        if (name !== "" && comment !== "") {
            event.preventDefault();
            setbuttonName('Submitting.....')
            saveCommentToDb({ name, comment })
                .then(data => {
                    setvalues({ ...values, name: "", comment: "" })
                    setbuttonName("Thank you for your feedback :)");
                    setbuttonStatus(2)
                })
                .catch((err) => {
                    console.log(err);
                    setbuttonName("Something went wrong try again after sometime");
                    setbuttonStatus(3);
                });
        }
    }

    return (
        <div className="container my-5 py-5 z-depth-1">
            <section className=" px-md-5 mx-md-5 dark-grey-text">
                <h3 className="font-weight-bold mb-4 head text-center">Contact & feedback here</h3>
                <div className="row">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label className="para">Your name</label>
                                        <input type="text" required onChange={onHandleChange('name')} value={name} id="contact-name" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <label className="para">Your feedback</label>
                                        <textarea id="contact-message" required onChange={onHandleChange('comment')} value={comment} className="form-control md-textarea" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="text-center text-md-left mt-2">
                            {isButtonChange(buttonStatus)}
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <svg className="bi bi-map" width="2em" height="2em" viewBox="0 0 16 16" fill="darkblue" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M15.817.613A.5.5 0 0116 1v13a.5.5 0 01-.402.49l-5 1a.502.502 0 01-.196 0L5.5 14.51l-4.902.98A.5.5 0 010 15V2a.5.5 0 01.402-.49l5-1a.5.5 0 01.196 0l4.902.98 4.902-.98a.5.5 0 01.415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z" clipRule="evenodd" />
                                </svg>
                                <p className="para">Miyapur Hyderbad 500049 Telangana</p>
                            </li>
                            <li>

                                <svg className="bi bi-phone" width="2em" height="2em" viewBox="0 0 16 16" fill="darkblue" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                                <p className="para">9676258512</p>
                            </li>
                            <li>
                                <svg className="bi bi-chat-square-dots" width="2em" height="2em" viewBox="0 0 16 16" fill="darkblue" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M14 1H2a1 1 0 00-1 1v8a1 1 0 001 1h2.5a2 2 0 011.6.8L8 14.333 9.9 11.8a2 2 0 011.6-.8H14a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v8a2 2 0 002 2h2.5a1 1 0 01.8.4l1.9 2.533a1 1 0 001.6 0l1.9-2.533a1 1 0 01.8-.4H14a2 2 0 002-2V2a2 2 0 00-2-2H2z" clipRule="evenodd" />
                                    <path d="M5 6a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                                <p className="para">vadaparthysurendra@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Contact;
