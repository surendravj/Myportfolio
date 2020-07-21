import React, { useState, useEffect } from "react";
import "../index.css";
import { getAllComments } from "../API/API_helper";
import avatar from "../assets/images/avataaars.png";

const Testimonal = () => {
  const [comments, setcomments] = useState([]);

  const loadData = () => {
    if (typeof window !== undefined) {
      if (sessionStorage.getItem("comments")) {
        setcomments(JSON.parse(sessionStorage.getItem("comments")));
        return JSON.parse(sessionStorage.getItem("comments"));
      } else {
        getAllComments()
          .then((data) => {
            sessionStorage.setItem("comments", JSON.stringify(data));
            setcomments(JSON.parse(sessionStorage.getItem("comments")));
          })
          .catch((e) => console.log(e));
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const loopComments = () => {
    return comments.map((cmt, i) => {
      return (
        <div className="col-md-4 text-center mb-4" key={i}>
          <div className="card-img-100 mx-auto mb-4">
            <img height="80" width="80" src={avatar} alt="avatar" />
          </div>
          <p className="mt-3 m2-4 text-muted">{cmt.comment}</p>
          <p className="font-italic font-weight-normal">- {cmt.name}</p>
        </div>
      );
    });
  };

  return (
    <div className="container mt-5 z-depth-1" data-aos="zoom-in">
      <section className="text-center dark-grey-text p-5">
        <h2 className="font-weight-bold">What people say about me</h2>
        <hr className="w-header my-4" />
        <div className="row test">{loopComments()}</div>
      </section>
    </div>
  );
};

export default Testimonal;
