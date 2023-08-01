import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'

//import Logo from '../Logo';

//import ThemeIconLight  from '../../assets/ligthMode/ampoule.png';
//import ThemeIconDark  from '../../assets/ligthMode/ampouleBlack.png';
import ContextConnected from '../Context/ContextConnected.component';

//import Switch from './Switch.component';

export default function Header() {
    //const  {darkMode, setDarkMode} = useContext(ContextTheme);
    const {isConneted, setIsConneted} = useContext(ContextConnected); 
    const [isActive, setIsActive]=useState<boolean>(false);
    const handleSubmit = () => {
        localStorage.clear();
        setIsConneted(false);   
    }
    const showMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <nav className='classic_navbar'>
                    {/*<Logo />*/}
                <Link className='classic_navbar_brand' to={'/'}>JustF0r</Link>
                <ul className={isActive?'classic_navbar_menu active':'classic_navbar_menu'}>
                    <li className='classic_navbar_item'>
                        <Link className='classic_navbar_link' to={"/"}>Accueil</Link>
                    </li>
                    <li className='classic_navbar_item'>
                        <Link className='classic_navbar_link' to={"/Cocktail"}>Cocktail</Link>
                    </li>
                    <li className='classic_navbar_item'>
                        <Link className='classic_navbar_link' to={"/recipes"}>Recettes</Link>
                    </li>
                    <li className='classic_navbar_item'>
                        <Link className='classic_navbar_link' to={"/novels"}>Novel</Link>
                    </li>
                    <li className='classic_navbar_item'>
                        {!isConneted? <Link className='classic_navbar_link' to={"/Connexion"}>Connexion</Link>: <div role='button' onClick={()=>handleSubmit}>Déconnexion</div>}
                    </li>
                </ul>
                {/*<Switch />*/}
                <div role='button' onClick={()=> showMenu()} className={isActive?"hamburger active":"hamburger"}>
                    <span className="hamburger_bar"></span>
                    <span className="hamburger_bar"></span>
                    <span className="hamburger_bar"></span>
                </div>
            </nav>
        </>
    )

}