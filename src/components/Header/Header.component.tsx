import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Context from '../Context/Context.component';

import Logo from '../Logo';

import ThemeIconLight  from '../../assets/ligthMode/ampoule.png';
import ThemeIconDark  from '../../assets/ligthMode/ampouleBlack.png';


export default function Header() {
  const  {darkMode, setDarkMode}= useContext(Context);
  return (
    <Navbar collapseOnSelect expand="lg" bg={!darkMode?"dark":"white"} variant="dark">
      <Container>
        <Navbar.Brand href="/home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='navBar__text'>Accueil</Nav.Link>
            <Nav.Link href="/Connexion" className='navBar__text'>Connexion</Nav.Link>
            <NavDropdown title="Novel" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='navBar__text'>Recent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='navBar__text'>
                <span className='hotText'>Hot Novels</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='navBar__text'>
                Source link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <button id='themeButton' onClick={() => setDarkMode(!darkMode)} >
              {!darkMode ? (<img className='themeImg' src={ThemeIconLight} alt="light" />) : (<img className='themeImg' src={ThemeIconDark} alt="dark" />)}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}