
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import clss from './nav.module.css';
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import {SiGmail} from "react-icons/si";
export function Navb(){
    return(
        <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/profile">profile</Nav.Link>
          </Nav>
            <a style={{color:"white"}} href='https://www.linkedin.com/in/pooarasu-s/'><AiFillLinkedin className={clss.icon}/></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a style={{color:"white"}} href='https://github.com/pooaras'><AiFillGithub className={clss.icon}/></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a style={{color:"white"}} href="mailto:pooarasusivaraj2002@gmail.com"><SiGmail className={clss.icon}/></a>
          
        </Container>
      </Navbar>
        </div>
    );
}