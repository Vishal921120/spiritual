import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faOm} from "@fortawesome/free-solid-svg-icons" 

function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" fixed="top">
          <FontAwesomeIcon icon={faOm} beat size="2xl" style={{color: "#f2f4f8", margin:"10px"}} />
          <Navbar.Brand href="#home"><b>Krishna</b></Navbar.Brand>
        <Container>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Pics</Nav.Link>
            <Nav.Link href="#features">Shlokas</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
