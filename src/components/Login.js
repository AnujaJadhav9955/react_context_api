import React, { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';

function Login() {
 const { setUsername, setShowProfile} = useContext(LoginContext)
  return (
    <div>
    <input type="text" placeholder='Username' onChange={(event) => setUsername(event.target.value)}></input>
    <input type="pass" placeholder='Password'></input>
    <button onClick={() => setShowProfile(true)}>Login</button>  
    </div>
  )
}

export default Login