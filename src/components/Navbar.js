import React from 'react';
import '../index.css';
import { Link, withRouter } from "react-router-dom";
const Navbar = ({ history }) => {

    const changeColor = (history, path) => {
        if (history.location.pathname === path) {
            return ({ color: "#fc5185" })
        }
        return ({ color: "#ffffff" })
    }

    
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top nav-color">
                <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link to="/" style={changeColor(history, "/")} className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resume" style={changeColor(history, "/resume")} className="nav-link">
                                My-resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navbar);