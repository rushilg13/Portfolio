import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import biti from "../../Assets/Projects/biti.png";
import password from "../../Assets/Projects/password.png";
import happy from "../../Assets/Projects/happy.png";
import matched from "../../Assets/Projects/matched.png";
import coupon from "../../Assets/Projects/coupon.png";
import diary from "../../Assets/Projects/diary.png";
import matchers from "@testing-library/jest-dom/matchers";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matched}
              isBlog={false}
              title="MatchED"
              description="MatchEd is a free platform that acts a matchmaker for people who wants to learn new skills and teach a skill they are familiar with in return."
              ghLink="https://github.com/rushilg13/MatchEd"
              demoLink="https://matched.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={biti}
              isBlog={false}
              title="B.I.T.I - Bag It, Tag It"
              description="Your one stop solution for visualizing sales and tracking orders. B.I.T.I helps in managing daily orders and tracking their status while helping your business realize its growth."
              ghLink="https://github.com/rushilg13/B.I.T.I"
              demoLink="https://b-i-t-i.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={happy}
              isBlog={false}
              title="Happy Times!"
              description="Developed a Full stack web app that uses FARM stack and NLP to classify News based on headlines as positive or negative"
              ghLink="https://github.com/rushilg13/GoodNews"
              demoLink="https://cutt.ly/OOGMHZp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Password Analyzer"
              description="Website uses Machine Learning and Natural Language processing techniques to determine the strength of the passwords that user wants to check the strength of."
              ghLink="https://github.com/rushilg13/Password-Classification-Web"
              demoLink="https://password-strength-classify.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coupon}
              isBlog={false}
              title="CouponShare"
              description="CouponShare is a matchmaking website for people with coupons that they would not be using and for people who wants to avail discounts by finding right coupons for themselves."
              ghLink="https://github.com/rushilg13/CouponShare"
              demoLink="https://coupon-share.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diary}
              isBlog={false}
              title="VIT Diaries"
              description="This website is specifically designed and made for people from VIT, Vellore to share their stories with people anonymously."
              ghLink="https://github.com/rushilg13/VIT-Diaries"
              demoLink="https://vit-diaries.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
