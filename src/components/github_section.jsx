import React from "react";
import GitHubCalendar from "react-github-calendar";

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
        years={[2019, 2020, 2021]}
        fullYear={false}
      />
    </div>
  );
};

export default GithubSection;
