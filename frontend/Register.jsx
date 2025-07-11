import React, { useState } from 'react';  //import useState from react 
import axios from 'axios';     //Importing axios for making HTTP requests to the backend API.
import { Link, useNavigate } from 'react-router-dom';  //import links for navigation links and usenavigate from React Router
import styles from './form.module.css'; //Importing CSS module styles for styling the component using class names.

function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate(); //use to Navigate to login page


   //runs after when a new user register the form
  const handleSubmit = async (e) => {
    console.log(username,password,"inside handlesubmit");
    e.preventDefault();   //prevents the page from reloading
    try {
      const result = await axios.post('http://localhost:3001/register', { username, password });   //Sends a POST request to  backend register API with the entered username and password.
      if (result.data === 'Registered') {
        navigate('/login');   // navigate to the login after completing registration successfully
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.formContainer}>
        <h2>Register</h2>
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
          <button type="submit">Register</button>
        </form><br />
        <p>
          Already have an account?
          <Link to="/login" className={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;