import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import ScrollAnimation from "react-animate-on-scroll";


export function Contact(){

  return(
   <ScrollAnimation animateIn="fadeInUp">
     <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:Hello@vinayaksingh.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:Hello@vinayaksingh.com">mdtorikulislam1808@gmail.com</a>
        </div>
        
        <div>
        <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+880) 1762732490 (WhatsApp)</a> 
        </div> 
      </div>
      <Form></Form>
    </Container>
   </ScrollAnimation>
  )
}