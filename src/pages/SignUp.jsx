import React from 'react'
import "../styles/pages/SignUp.css";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
        <form action="#" className="SignUp">
          <h2>
            Sign Up
          </h2>
            <input type="email" placeholder="Enter your email address" />
            <input type="password" placeholder="Enter your password" />
            <input type="password" placeholder="Conform your password" />
            <div className="buttons">
              <button type="reset">Clear</button>
              <button type="submit">Submit</button>
            </div>
            <p>Already have an account? <Link to="/login">
            Login
            </Link>
            </p>
        </form>
  )
}

export default SignUp