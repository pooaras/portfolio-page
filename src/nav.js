
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';

export function Navb(){
    return(
        <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/profile">profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
}