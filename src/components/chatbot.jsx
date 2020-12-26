import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import "../resume.css";
import robot from "../assets/images/robot.svg";
import close from "../assets/images/close.svg";

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
      trigger: "5",
    },
    {
      id: "5",
      message: "I am currently in beta version",
      trigger: "6",
    },
    {
      id: "6",
      message: "Talk with you more in few days Bye",
      end: true,
    },
  ];

  return (
    <div>
      <div className="chatbox">
        {botOpen ? <ChatBot steps={steps} /> : null}
      </div>

      <div className="chatbot-btn">
        {botOpen ? (
          <button
            className="chatbot-btn btn btn-lg btn-primary shadow-lg"
            onClick={() => setbotOpen(false)}
          >
            <img src={close} alt="avatr" className="img-fluid" />
          </button>
        ) : (
          <button
            className="chatbot-btn btn btn-lg btn-primary shadow-lg"
            onClick={() => setbotOpen(true)}
          >
            <img src={robot} alt="avatr" className="img-fluid" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
