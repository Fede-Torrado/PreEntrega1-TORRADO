import logo from "../assets/logo.svg";
import CartWidget from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img alt="Logo" src={logo} width="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cereales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Refrigerados
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Celiacos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
