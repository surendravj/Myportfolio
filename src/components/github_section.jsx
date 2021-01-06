import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Card } from "ui-neumorphism";
import "../index.css";


const GithubSection = () => {
 
  return (
    <div className="container text-center my-5 py-5 z-depth-1">
      <h3 className="font-weight-bold mb-4 head text-center">
        Github Calender
      </h3>

      <GitHubCalendar
        username="surendravj"
        color="#071a52"
        blockSize={10}
        blockMargin={4}
        fullYear={false}
        years={[2020, 2021]}
      />

      <div
        className="row"
        style={{ display: "flex", justifyContent: "Center" }}
      >
        <div className="col-md-3 ml-1 mb-2 text-center">
          <Card className="p-3 bg-white" elevation={1}>
            <p className="github-text">Organizations</p>
            <h1 className="display-3">3</h1>
          </Card>
        </div>
        <div className="col-md-3 ml-1 mb-2 text-center">
          <Card className="p-3" elevation={1}>
            <p>Repos</p>
            <h1 className="display-3">30</h1>
          </Card>
        </div>
        <div className="col-md-3 ml-1 mb-2 text-center">
          <Card className="p-3 bg-white" elevation={1}>
            <p className="github-text">Commits</p>
            <h1 className="display-3">174</h1>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GithubSection;
