import React from "react";
import "../index.css";
import { Card } from "ui-neumorphism";

const Skill = () => {
  const skills = [
    "C",
    "C++",
    "Python",
    "Javascript",
    "Dart",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "NPM",
    "ReactJs",
    "Redux",
    "NodeJs",
    "express",
    "Flutter",
    "MySql",
    "Mongodb",
    "Firebase",
    "AWS",
    "Github",
    "TensorFlow"
  ];

  const skillDiv = () => {
    return skills.map((skill, index) => {
      return (
        <div
          className="col-lg-2 col-md-2 col-sm-2 col-xs-2 ml-1 mb-3 text-center"
          key={index}
        >
          <Card className="skill-card text-center bg-white p-2" elevation={1}>
            <img
              width="40"
              height="40"
              src={require(`../assets/images/logos/${skill}.svg`)}
              alt="dfs"
              className="img-fluid"
            />
            <div className="skill-text">{skill}</div>
          </Card>
        </div>
      );
    });
  };

  return (
    <div className="container text-center" data-aos="zoom-in">
      <h3 className="service-head">My tech stack</h3>
      <div className="row offset-md-2 mt-3">
        <div className="col-md-12">
          <div className="row">{skillDiv()}</div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
