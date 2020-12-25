import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import "../resume.css";
import robot from "../assets/images/robot.svg";

const Chatbot = () => {
  const [botOpen, setbotOpen] = useState(false);
  const greetings = () => {
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12) greet = "Good Morning";
    else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
    else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
    return greet;
  };
  const steps = [
    {
      id: "0",
      message: `Hey, ${greetings()}!`,
      trigger: "1",
    },
    {
      id: "1",
      message: "Welcome to my portfolio",
      trigger: "2",
    },
    {
      id: "2",
      message: "May I know your name ?",
      trigger: "3",
    },
    {
      id: "3",
      user: true,
      trigger: "4",
    },
    {
      id: "4",
      message: "Hello {previousValue}, nice to meet you",
      end: true,
    },
  ];

  return (
    <div className="chatbox">
      {botOpen ? (
        <ChatBot steps={steps} />
      ) : (
        <button
          className="chatbot-btn btn btn-lg btn-primary shadow-lg"
          onClick={() => setbotOpen(true)}
        >
          <img src={robot} alt="avatr" className="img-fluid" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
