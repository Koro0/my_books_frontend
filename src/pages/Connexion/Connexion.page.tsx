import {useState} from 'react';
import Login from '../../components/Connexion/Login.component';
import Register from '../../components/Connexion/Register.component';

 function Connexions() {
    const [loginRegister, setLoginRegister] = useState<boolean>(false)
  return (
    <div id='connexion'>
      <h1>{!loginRegister ? 'Login' : 'Register'}</h1>
      <div>
      {!loginRegister ? <Login /> : <Register />}
    </div>
      {!loginRegister ? (<p>Vous n’avez pas de compte ? </p>) : (<p>Vous avez un compte ?</p> ) }
      <button onClick={()=> setLoginRegister(!loginRegister)}> {!loginRegister ? 'Inscrivez-vous' : 'Connectez-vous'}</button> 
    </div>
  )
}
export default Connexions