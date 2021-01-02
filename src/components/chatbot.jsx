import "../resume.css";
import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
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

  const button = () => (
    <div class="btn-group " role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary">
        <a
          class="text-white"
          href="https://www.instagram.com/surendra_vadaparthy/"
        >
          Instagram
        </a>
      </button>
      <button type="button" class="btn btn-secondary">
        <a
          class="text-white"
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/surendra-vadaparthy-07b145193/"
        >
          Linkedin
        </a>
      </button>
      <button type="button" class="btn btn-secondary">
        <a
          class="text-white"
          style={{ textDecoration: "none" }}
          href="https://github.com/surendravj"
        >
          Github
        </a>
      </button>
    </div>
  );
  const steps = [
    {
      id: "0",
      message: `Hey, ${greetings()}!`,
      trigger: "1",
    },
    {
      id: "1",
      message: "Welcome to my portfolio.\nMay I know your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hello {previousValue}, nice to meet you",
      trigger: "4",
    },
    {
      id: 4,
      message: "Feel free to contact me",
      trigger: "contact",
    },
    {
      id: "contact",
      component: button(),
      end: true,
    },
  ];

  return (
    <div>
      <div className="chatbox">
        {botOpen ? (
          <ChatBot
            headerTitle="Surendra Vadaparthy Bot"
            recognitionEnable={true}
            steps={steps}
          />
        ) : null}
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
