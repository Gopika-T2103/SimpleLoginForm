import React, { useState } from 'react';  //import useState from react 
import axios from 'axios';                //Importing axios for making HTTP requests to the backend API.
import { Link, useNavigate } from 'react-router-dom';   //import links for navigation links and usenavigate from React Router
import styles from './form.module.css';       //Importing CSS module styles for styling the component using class names.

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate(); //use to Navigate to home page

  //runs after user submit the form
  const handleSubmit = async (e) => {
    console.log(username,password,"inside handlesubmit");
    e.preventDefault();   //prevents the page from reloading
    try {
      const result = await axios.post('http://localhost:3001/login', { username, password }); //Sends a POST request to  backend login API with the entered username and password.
      console.log(result.data);
      if (result.data.message === 'Login successful') {
        navigate('/home'); // home after successful login
      }
      else{
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login error',error);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.formContainer}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form><br />
        <p>
          Don't have an account?
          <Link to="/register" className={styles.link}>Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;