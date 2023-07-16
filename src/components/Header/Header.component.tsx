import { useContext } from 'react';
import { Link } from 'react-router-dom'

import Logo from '../Logo';

//import ThemeIconLight  from '../../assets/ligthMode/ampoule.png';
//import ThemeIconDark  from '../../assets/ligthMode/ampouleBlack.png';
import ContextConnected from '../Context/ContextConnected.component';

import Switch from './Switch.component';

export default function Header() {
    //const  {darkMode, setDarkMode} = useContext(ContextTheme);
    const {isConneted, setIsConneted} = useContext(ContextConnected); 
    const handleSubmit = () => {
        localStorage.clear();
        setIsConneted(false);
      }

    return (
        <>
            <nav className='classic_navbar'>
                <Logo />
                <button className=''>
                    <span className="classic_navbar_btn"></span>
                </button>
                <Link to={"/"}>Accueil</Link>
                <Link to={"/Cocktail"}>Cocktail</Link>
                <Link to={"/recipes"}>Recettes</Link>
                <Link to={"/novels"}>Novel</Link>
                {!isConneted? <Link to={"/Connexion"}>Connexion</Link>: <button onClick={()=>handleSubmit}>Déconnexion</button>}
                <Switch />
            </nav>
        </>
    )

}