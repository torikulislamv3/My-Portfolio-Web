import { Container } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import tailwind from "../../assets/tailwindcss.png";
import materialui from "../../assets/materialui.png";
import jsIcon from "../../assets/js-icon.svg";
import nodejs from "../../assets/nodejs.png";
import expessjs from "../../assets/expressjs.png";
import mongodb from "../../assets/mongodb.jpg";
import jwt from "../../assets/jwt.png";
import firebase from "../../assets/firebase.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          I’m a dedicated front-end developer skilled in HTML, CSS, JavaScript, and React, focused on creating clean, responsive, and visually engaging web applications. My aim is to build seamless digital experiences that balance functionality and design.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          With experience in tools like Tailwind CSS, Firebase, and Mongoose, I approach each project with attention to detail and a commitment to client satisfaction. I stay up-to-date with the latest industry practices to ensure my work meets professional standards.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          As a collaborative team player, I enjoy working with others to bring ideas to life and exceed project expectations. Let’s connect and discuss how I can contribute to your project’s success!</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div title="react.js" className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div title="typescript" className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div title="html5" className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div title="css" className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div title="tailwind-css" className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={tailwind} alt="Tailwind-Css" />
            </ScrollAnimation>
          </div>
          <div title="material-ui" className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={materialui} alt="materialui" />
            </ScrollAnimation>
          </div>
          <div title="javascript" className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div title="firebase" className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={firebase} alt="firebase" />
            </ScrollAnimation>
          </div>
          <div title="node.js" className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={nodejs} alt="nodejs" />
            </ScrollAnimation>
          </div>
          <div title="express.js" className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={expessjs} alt="expessjs" />
            </ScrollAnimation>
          </div>
          <div title="mongodb" className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={mongodb} alt="mongodb" />
            </ScrollAnimation>
          </div>
          <div title="jwt" className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jwt} alt="jwt" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src="https://i.postimg.cc/rp4g1344/profile-pic.png" alt="Vinayak Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
