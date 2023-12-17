import { useState } from 'react';
import Login from '../../components/Connexion/Login.component';
import Register from '../../components/Connexion/Register.component';

function Connexions() {
  const [loginRegister, setLoginRegister] = useState<boolean>(false);
  return (
    <div className="connexion">
      <div className="connexion_box">
        <h1>{!loginRegister ? 'Login' : 'Register'}</h1>
        <div>{!loginRegister ? <Login /> : <Register />}</div>
        <div className="connexion_accountOrNot">
          {!loginRegister ? (
            <p>Pas de compte ? </p>
          ) : (
            <p>Vous avez un compte ? </p>
          )}
          <button
            className="connexion_switchBtn"
            onClick={() => setLoginRegister(!loginRegister)}
          >
            {' '}
            {!loginRegister ? 'Inscrivez-vous' : 'Connectez-vous'}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Connexions;
