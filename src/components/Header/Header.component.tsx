import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Context from '../Context/Context.component';

import Logo from '../Logo';

export default function Header() {
  const  {darkMode, setDarkMode}= useContext(Context);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Novel" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Recent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <span className='hotText'>Hot Novels</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <div onClick={setDarkMode(!darkMode)} id="ligth">
              Dank memes
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}