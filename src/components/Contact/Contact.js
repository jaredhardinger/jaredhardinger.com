import React from "react";
import { Card } from "antd";
import { useForm } from "@formspree/react";
import Form from "./Form";
import behance from "../../assets/behance.png";
import behanceHover from "../../assets/behanceHover.png";
import { gitHubIcon } from "../../socialIcons";
import { linkedInIcon } from "../../socialIcons";
import { instagramIcon } from "../../socialIcons";
import "./contact.scss";

function Contact() {
  const [state, handleSubmit] = useForm("mvolzpqo");

  return (
    <div id="contact">
      <div className="section-header">Contact</div>
      <div className="sub-header">
        Send me a message or find me on the internet!
      </div>
      <div className="contact-section">
        <Card>
          {state.succeeded ? (
            <div className="success-message">Message sent. Thanks!</div>
          ) : (
            <Form state={state} handleSubmit={handleSubmit} />
          )}
        </Card>
        <div className="social">
          <a
            href="https://github.com/cgeglio"
            rel="noopener noreferrer"
            target="_blank"
          >
            {gitHubIcon}
          </a>
          <a
            href="https://www.linkedin.com/in/cgeglio"
            rel="noopener noreferrer"
            target="_blank"
          >
            {linkedInIcon}
          </a>
          <a
            className="behance"
            href="https://www.behance.net/cgeglio"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="behance-icon"
              src={behance}
              alt="The beHance logo"
            />
            <img
              className="behance-icon-hover"
              src={behanceHover}
              alt="The beHance logo"
            />
          </a>
          <a
            href="https://www.instagram.com/carlately"
            rel="noopener noreferrer"
            target="_blank"
          >
            {instagramIcon}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
