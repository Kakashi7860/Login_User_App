import Login from './components/Login.jsx'
import { useState } from 'react';
import Dashbpard from './components/Dashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin =(name)=>{
    setIsLoggedIn(true);
    setUsername(name);

  }
  const handleLogout =()=>{
    setIsLoggedIn (false);
    setUsername("");
  }
  return (
   <>
   <div>
    {isLoggedIn ? (
      <Dashbpard username={username} onLogout={handleLogout} />
    ) : (
      <Login onLogin={handleLogin} />
    )}
   </div>


   </>
  )
      

}

export default App
