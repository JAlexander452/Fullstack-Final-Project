import React, { useState } from 'react';
import axios from 'axios';


function LoginForm({ onLoginSuccess }) {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [isLogin, setIsLogin] = useState(true);
 const [message, setMessage] = useState('');


 const handleSubmit = async (event) => {
   event.preventDefault();
   const url = isLogin ? '/login' : '/register';
   try {
     const response = await axios.post(url, { username, password });
     if (response.data) {
       console.log(`${isLogin ? 'Login' : 'Registration'} Successful`, response.data.message);
       setMessage(response.data.message);
       if (isLogin) {
         onLoginSuccess();  // Trigger successful login action
       }
     } else {
       throw new Error('No data received');
     }
   } catch (error) {
     if (error.response && error.response.data) {
       console.error(`${isLogin ? 'Login' : 'Registration'} Failed`, error.response.data.message);
       setMessage(error.response.data.message || 'Unknown error');
     } else {
       console.error(`${isLogin ? 'Login' : 'Registration'} Failed`, error.message);
       setMessage('Login failed due to network or server issue.');
     }
   }
 };


 return (
   <div>
     <h2>{isLogin ? 'Login' : 'Register'}</h2>
     <form onSubmit={handleSubmit}>
       <label>
         Username:
         <input
           type="text"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           required
         />
       </label>
       <label>
         Password:
         <input
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
         />
       </label>
       <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
       <button type="button" onClick={() => setIsLogin(!isLogin)}>
         {isLogin ? 'Need to register?' : 'Already have an account? Login'}
       </button>
     </form>
     <p>{message}</p>
   </div>
 );
}


export default LoginForm;


