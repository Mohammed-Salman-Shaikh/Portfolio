import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammed Salman Shaikh </span>
            from <span className="purple"> Bangalore, India.</span>
            <br /> I am a graduate in Computer Engineering (Data Science) from Presidency University, Bangalore.
            <br />
            {/* Additionally, I am currently employed as a software developer at
            Juspay. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              {/* <ImPointRight /> Writing Tech Blogs */}
            </li>
            <li className="about-activity">
              <ImPointRight /> Trade in Stock Market
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep moving forward by building things that add value!"{" "}
          </p>
          <footer className="blockquote-footer">Mohammed Salman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
