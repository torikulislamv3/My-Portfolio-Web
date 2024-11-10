import { Container } from "./styles";
import githubIcon from "../../assets/github.png"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
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
       

{/* project-4 */}
       

{/* project-5 */}
       
{/* project-6 */}
        
      </div>
    </Container>
  );
}