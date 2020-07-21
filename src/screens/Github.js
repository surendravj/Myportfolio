import React, { useEffect, useState } from "react";
import { CubeSpinner } from "react-spinners-kit";
import Navbar from "../components/Navbar";
import { getGithubRepos } from "../API/API_helper";
import Table from "../components/Github_Table";
import "../resume.css";
const Github = () => {
  const [repos, setrepos] = useState([]);
  const loadRepos = () => {
    getGithubRepos()
      .then((data) => {
        if (typeof window !== undefined) {
          if (sessionStorage.getItem("repos")) {
            setrepos(JSON.parse(sessionStorage.getItem("repos")));
          } else {
            setrepos(data);
            sessionStorage.setItem("repos", JSON.stringify(data));
          }
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    loadRepos();
  }, []);

  const badge = () => {
    return (
      <div className="mt-5 text-center mb-3">
        <button type="button" className="btn btn-primary mt-5 badge-deco">
          My Github Repositories{" "}
          <span className="badge badge-light ml-2">{repos.length}</span>
        </button>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="mt-5 ">
        {badge()}
        {repos.length === 0 ? (
          <div className=" text-center mt-5 row">
            <div className="col-md-6 loader mt-5 py-5 offset-md-3 text-center">
              <CubeSpinner size={100} color="#10316b" />;
            </div>
          </div>
        ) : (
          <Table data={repos} />
        )}
      </div>
    </div>
  );
};

export default Github;
