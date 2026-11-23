import React from 'react'
import "../styles/pages/SignUp.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
        <form action="#" className="SignUp">
          <h2>
            Login
          </h2>
            <input type="email" placeholder="Enter your email address" />
            <input type="password" placeholder="Enter your password" />
            <div className="buttons">
              <button type="reset">Clear</button>
              <button type="submit">Submit</button>
            </div>
            <p>Don't have an account? <Link to="/signup">
            Sign Up
            </Link>
            </p>
        </form>
  )
}

export default Login;