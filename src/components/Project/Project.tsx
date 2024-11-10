import { Container } from "./styles";
import githubIcon from "../../assets/github.png"
import githublc from "../../assets/github-black.png"
import liveServer from "../../assets/live.png"
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

{/* project-1 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div >
              <img height={'150px'} width={'100%'} src="https://i.postimg.cc/nVWDtJLf/Screenshot-2024-11-10-142957.png" alt="teamProject" />
            </div>
            <div className="body">
              <h3>RevBoost Solution - TEAM PROJECT</h3>
              <p>RevBoost Solutions - This platform offers a powerful solution for businesses to manage customer relationships, track sales, and streamline internal processes. It includes features like CRM integration, real-time analytics, customizable workflows, and secure data storage. The user-friendly interface ensures ease of use, improving business efficiency. </p>
            </div>
            <header>
              <div title="live project">
              <a href="https://revboost.business-easy.com/" target="_blank" rel="noreferrer">
                  <img src={liveServer} alt="Visit site" /></a>
              </div>
              <div className="project-links">
                <a title="client site" href="https://github.com/torikulislamv3/Revboost-Solution-Client" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a title="server site" href="https://github.com/torikulislamv3/Revboost-Solution-Server" target="_blank" rel="noreferrer">
                  <img src={githublc} alt="Visit site" />
                </a> </div>
            </header>
          </div>
        </ScrollAnimation>

{/* project-2 */}
<ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div >
              <img height={'150px'} width={'100%'} src="https://i.postimg.cc/PrRb5DrJ/Screenshot-2024-11-10-155403.png" alt="Amimals pro" />
            </div>
            <div className="body">
              <h3>Animal's Pro</h3>
              <p>Animals Pro is a web application designed to connect pet owners and animal lovers. Users can create and share pet-related content, offering pets for adoption or promoting donation campaigns to support animal welfare. The platform fosters a community where users can adopt pets or contribute to charitable causes, making a positive impact on animal care. </p>
            </div>
            <header>
              <div title="live project">
              <a href="https://animals-pro-fe8cd.web.app/" target="_blank" rel="noreferrer">
                  <img src={liveServer} alt="Visit site" /></a>
              </div>
              <div className="project-links">
                <a title="client site" href="https://github.com/torikulislamv3/Animal-Pro_client" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a title="server site" href="https://github.com/torikulislamv3/Animals-Pro_Server" target="_blank" rel="noreferrer">
                  <img src={githublc} alt="Visit site" />
                </a> </div>
            </header>
          </div>
        </ScrollAnimation>

{/* project-3 */}
<ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div >
              <img height={'150px'} width={'100%'} src="https://i.postimg.cc/Kv27kbnS/Screenshot-2024-11-10-162447.png" alt="Fabric House" />
            </div>
            <div className="body">
              <h3>Fabric House</h3>
              <p>Fabric House is an online platform for selling craft items and various types of fabrics. Users can upload and showcase their products, including custom-made fabric designs, and craft items. The platform also allows customers to place orders for custom designs based on their preferences, creating a unique and personalized shopping experience for users in the craft and fabric industry. </p>
            </div>
            <header>
              <div title="live project">
              <a href="https://fabric-arts-textile.web.app/" target="_blank" rel="noreferrer">
                  <img src={liveServer} alt="Visit site" /></a>
              </div>
              <div className="project-links">
                <a title="client site" href="https://github.com/torikulislamv3/Fabric-House-Client" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a title="server site" href="https://github.com/torikulislamv3/Fabric-House-Server" target="_blank" rel="noreferrer">
                  <img src={githublc} alt="Visit site" />
                </a> </div>
            </header>
          </div>
        </ScrollAnimation>

{/* project-4 */}
<ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div >
              <img height={'150px'} width={'100%'} src="https://i.postimg.cc/SKFmqgBr/Screenshot-2024-11-10-162938.png" alt="Alfa-Doc" />
            </div>
            <div className="body">
              <h3>Alfa-Doc</h3>
              <p>Alfa Doc is a web platform designed for students to upload and share assignment-related content. Users can submit completed assignments based on uploaded materials and receive marks for their work based on quality. It offers a collaborative space for educational content sharing, making assignment completion more efficient and accessible. </p>
            </div>
            <header>
              <div title="live project">
              <a href="https://alfa-doc.web.app/" target="_blank" rel="noreferrer">
                  <img src={liveServer} alt="Visit site" /></a>
              </div>
              <div className="project-links">
                <a title="client site" href="https://github.com/torikulislamv3/Alfa-Doc-Client" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a title="server site" href="https://github.com/torikulislamv3/Alfa-Doc-Server" target="_blank" rel="noreferrer">
                  <img src={githublc} alt="Visit site" />
                </a> </div>
            </header>
          </div>
        </ScrollAnimation>

{/* project-5 */}
<ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div >
              <img height={'150px'} width={'100%'} src="https://i.postimg.cc/X79bLfGB/Screenshot-2024-11-10-163314.png" alt="Alfa-Doc" />
            </div>
            <div className="body">
              <h3>E-Ticket</h3>
              <p>e-Ticket is a landing page that allows users to easily purchase bus tickets online. It features a dynamic seat selection system where users can view available seats and choose their preferred seat for booking. The project is built using HTML, CSS, and JavaScript, providing an interactive and user-friendly experience for ticket booking. </p>
            </div>
            <header>
              <div title="live project">
              <a href="https://torikulislamv3.github.io/assignment-no-five/" target="_blank" rel="noreferrer">
                  <img src={liveServer} alt="Visit site" /></a>
              </div>
              <div className="project-links">
                <a title="client site" href="https://github.com/torikulislamv3/assignment-no-five" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a title="server site" href="https://github.com/torikulislamv3/assignment-no-five" target="_blank" rel="noreferrer">
                  <img src={githublc} alt="Visit site" />
                </a> </div>
            </header>
          </div>
        </ScrollAnimation>
{/* project-6 */}
<ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div >
              <img height={'150px'} width={'100%'} src="https://i.postimg.cc/Jz6MH1Hp/Screenshot-2024-11-10-163910.png" alt="Digital-Clock" />
            </div>
            <div className="body">
              <h3>Digital-Clock</h3>
              <p>The Digital Clock project is built using HTML, CSS, and JavaScript. It displays live time and offers two modes: Digital and Analog. Users can switch between the two modes to view the current time in their preferred format. The clock updates in real-time, showcasing your ability to create dynamic and interactive features with front-end technologies. </p>
            </div>
            <header>
              <div title="live project">
              <a href="https://torikulislamv3.github.io/Simple-Clock/" target="_blank" rel="noreferrer">
                  <img src={liveServer} alt="Visit site" /></a>
              </div>
              <div className="project-links">
                <a title="client site" href="https://github.com/torikulislamv3/Simple-Clock" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a title="server site" href="https://github.com/torikulislamv3/Simple-Clock" target="_blank" rel="noreferrer">
                  <img src={githublc} alt="Visit site" />
                </a> </div>
            </header>
          </div>
        </ScrollAnimation>
        {/* Project-7 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div >
              <img height={'150px'} width={'100%'} src="https://i.postimg.cc/V6yyX5fW/Screenshot-2024-11-10-164401.png" alt="Simple-Calculator" />
            </div>
            <div className="body">
              <h3>Simple-Calculator</h3>
              <p>The Simple Calculator is a web-based application built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. The calculator provides an intuitive interface, making calculations quick and easy. </p>
            </div>
            <header>
              <div title="live project">
              <a href="https://github.com/torikulislamv3/simple_calculator" target="_blank" rel="noreferrer">
                  <img src={liveServer} alt="Visit site" /></a>
              </div>
              <div className="project-links">
                <a title="client site" href="https://github.com/torikulislamv3/simple_calculator" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a title="server site" href="https://github.com/torikulislamv3/Simple-Clock" target="_blank" rel="noreferrer">
                  <img src={githublc} alt="Visit site" />
                </a> </div>
            </header>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}