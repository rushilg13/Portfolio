import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rushil Goel. </span>
            <br />I am a final year student pursuing B.Tech in Computer Science and Engineering at VIT-Vellore.
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Real problem lies in optimization, not development"{" "}
          </p>
          <footer className="blockquote-footer">Rushil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
