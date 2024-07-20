import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import clss from "./nav.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
export function Navb() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/profile">profile</Nav.Link>
          </Nav>
          <span className={clss.bat}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="50pt"
              height="25pt"
              viewBox="0 0 300.000000 116.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,116.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M271 965 c191 -99 290 -219 292 -353 0 -33 -6 -72 -15 -88 l-14 -30
210 0 c253 0 346 -17 492 -89 109 -53 195 -137 234 -228 14 -31 28 -57 31 -57
3 0 16 26 29 58 16 39 44 77 89 123 147 148 372 210 704 195 l148 -6 -17 32
c-25 49 -22 135 9 201 52 114 154 195 357 285 19 8 -90 10 -423 9 l-449 -2
-19 -55 c-25 -71 -47 -101 -92 -123 -46 -23 -209 -36 -231 -18 -8 7 -20 38
-27 69 -10 47 -13 53 -19 32 -5 -23 -11 -25 -60 -25 -49 0 -55 2 -60 24 -5 21
-8 15 -18 -29 -7 -29 -17 -59 -23 -67 -15 -17 -117 -17 -193 1 -73 17 -101 44
-131 127 l-23 64 -443 2 -444 2 106 -54z"
                />
              </g>
            </svg>
          </span>
          <a
            style={{ color: "white" }}
            href="https://www.linkedin.com/in/pooarasu-s/"
          >
            <AiFillLinkedin className={clss.icon} />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a style={{ color: "white" }} href="https://github.com/pooaras">
            <AiFillGithub className={clss.icon} />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{ color: "white" }}
            href="mailto:pooarasusivaraj2002@gmail.com"
          >
            <SiGmail className={clss.icon} />
          </a>
        </Container>
      </Navbar>
    </div>
  );
}
