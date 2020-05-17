import React from 'react';
import '../index.css';
const Skill = () => {
    const skills = [
        'C/C++', 'Python', 'Javascript', "HTML5", "CSS3", "Boostrap", "ReactJs",
        "NodeJs", "ExpressJs", "Flutter", "Mongodb", "Firebase"];


    const skillDiv = () => {
        return (
            skills.map((skill, index) => {
                return (
                    <div className="col-lg-3 col-md-3 col-sm-2 col-xs-3 skill ml-1 mb-1 text-center" key={index}>
                        <div className="text-center mt-2 mb-2">{skill}</div>
                    </div>
                )
            })
        )
    }
    return (
        <div className="container text-center" data-aos="zoom-in">
            <h3 className="service-head">My tech stack</h3>
            <div className="row offset-md-2">
                <div className="col-md-12">
                    <div className="row">
                        {skillDiv()}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Skill;
