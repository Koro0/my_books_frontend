import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ContextTheme from '../Context/ContextTheme.component';

import Logo from '../Logo';

import ThemeIconLight  from '../../assets/ligthMode/ampoule.png';
import ThemeIconDark  from '../../assets/ligthMode/ampouleBlack.png';
import ContextConnected from '../Context/ContextConnected.component';


export default function HeaderBS() {
  const  {darkMode, setDarkMode} = useContext(ContextTheme);
  const {isConneted, setIsConneted} = useContext(ContextConnected); 
  const handleSubmit = () => {
    localStorage.clear();
    setIsConneted(false);
  }
  return (
    <Navbar className={"darkMode"} collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='navBar__text'>Accueil</Nav.Link>
            <Nav.Link href="/Cocktail" className='navBar__text'>Cocktail</Nav.Link>
            <NavDropdown title="Recettes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/recipes" className='navBar__text'>Recent</NavDropdown.Item>
              <NavDropdown.Item href="/add_recipes" className='navBar__text'>
                <span className='hotText'>Ajout</span>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Novel" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/novels" className='navBar__text'>Recent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='navBar__text'>
                <span className='hotText'>Hot Novels</span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='navBar__text'>
                Source link
              </NavDropdown.Item>
            </NavDropdown>
            {!isConneted?
              <Nav.Link href="/Connexion" className='navBar__text'>Connexion</Nav.Link>
            :<button onClick={()=>handleSubmit}>Déconnexion</button>}
          </Nav>
          <Nav>
            <button id='themeButton' onClick={() => setDarkMode(!darkMode)} >
              {!darkMode ? (<img className='themeImg' src={ThemeIconLight} alt="light" />) : (<img className='themeImg' src={ThemeIconDark} alt="dark" />)}
            </button>
            <label className='themeSwitch_switch'>
              <input type="checkbox" />
              <span className='themeSwitch_slider round'></span>
            </label>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
