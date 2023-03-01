import {useState} from 'react';

 function Connexions() {
    const [loginRegister, setLoginRegister] = useState<boolean>(false)
  return (
    <div>
      <h1>{!loginRegister ? 'Login' : 'Register'}</h1>
      
      <button onClick={()=> setLoginRegister(!loginRegister)}> {!loginRegister ? 'Login' : 'Register'} </button>
    </div>
  )
}
export default Connexions