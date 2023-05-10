import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import { LoginContext } from './contexts/LoginContext';
import { useState } from 'react';


function App() {
  const [username, setUsername] = useState('');
  const [showProfile, setShowProfile] = useState(false)
  return (
    <>
    <LoginContext.Provider value={{ username, setUsername, setShowProfile }} >
      {showProfile ? <Profile /> : <Login />}
   </LoginContext.Provider>
   </>
  );
}

export default App;
