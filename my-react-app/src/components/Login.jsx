import { useState } from 'react';
import '../styles/login.css';

function Login({onLogin}) {

    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handleLogin =()=>{
        if(username.trim()===""){
            setError("Username cannot be empty");
        } else {
            setError("");
            onLogin(username);
        }
    }
    return(
        <div className='Login_container'>
            <h2>Login Page</h2>

            <input type="text"
            placeholder={username}
            onChange={(e)=> setUsername(e.target.value)}
             />

             <button onClick={handleLogin}>Login</button>
             {error && <p className='error'>{error}</p>}






             </div>






    )
    
}

export default Login;