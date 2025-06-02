import React, { useState } from "react";
import "../css/Login.css";
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import TermsModal from "../components/TermsModal";




export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
const [showModal, setShowModal] = useState(false);

  const handleUsernameChange = e => {
    setUsername(e.target.value);
    setShowWelcome(e.target.value.length > 0);
  };

  const handlePasswordChange = e => setPassword(e.target.value);


  return (
    <div className="login-container">
      <Spline
        className="spline-background"
        scene="https://prod.spline.design/LGZate9Yi6uEA02L/scene.splinecode"
      />
      <div className="login-card">
        <img src="assets/logoblack.png" alt="Logo" style={{ width: '10%' }} />
        <h2>Sign In</h2>
        <form autoComplete="off" className="login-form">
          <div className="input-group">
            <label htmlFor="username" className="sr-only">Username</label>
            <div className="input-wrapper">
              <EnvelopeIcon className="input-icon" />
              <input
                autoFocus
                id="username"
                value={username}
                onChange={handleUsernameChange}
                type="text"
                placeholder="Email"
                autoComplete="off"
              />
            </div>
            {showWelcome && (
              <div className="welcome-message">
                👋 Welcome, <span>{username}</span>!
              </div>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="input-wrapper">
              <LockClosedIcon className="input-icon" />
              <input
                id="password"
                value={password}
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
                autoComplete="new-password"
              />
            </div>
            
          </div>
          <button
            type="submit"
            disabled={!username || !password}
            className="login-btn"
          >
            Sign In
          </button>
        </form>
        <p className="forgot-password-text">
  <Link to="/forgotpassword" className="forgot-password-link">
    Forgot password?
  </Link>
</p>
         <div className="divider">OR</div>
                <button className="google-btn" type="button" onClick={() => alert("Google Login (to be implemented)")}>
                  <svg className="google-icon" width="20" height="20" viewBox="0 0 20 20">
                    <g>
                      <path fill="#4285F4" d="M19.6 10.2c0-.68-.06-1.34-.17-1.97H10v3.73h5.45a4.66 4.66 0 01-2.02 3.06v2.56h3.27c1.92-1.77 3.03-4.37 3.03-7.38z"/>
                      <path fill="#34A853" d="M10 20c2.7 0 4.97-.9 6.62-2.44l-3.27-2.56c-.91.6-2.08.96-3.35.96-2.58 0-4.76-1.75-5.54-4.11H1.1v2.59A9.99 9.99 0 0010 20z"/>
                      <path fill="#FBBC05" d="M4.46 11.85a5.98 5.98 0 010-3.7V5.56H1.1a10.01 10.01 0 000 8.88l3.36-2.59z"/>
                      <path fill="#EA4335" d="M10 4.04c1.47 0 2.79.51 3.82 1.5l2.86-2.86C14.96 1.09 12.7 0 10 0A9.99 9.99 0 001.1 5.56l3.36 2.59C5.24 5.79 7.42 4.04 10 4.04z"/>
                    </g>
                  </svg>
                  Login with Google
                </button>
                 <p className="terms-text">
        By signing up, you agree to our{" "}
        <a
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          onClick={e => {
            e.preventDefault();
            setShowModal(true);
          }}
        >
          Terms and Privacy Policy.
        </a>
      </p>
      {showModal && (
        <TermsModal
          onClose={() => setShowModal(false)}
          onAccept={() => setShowModal(false)}
          onDecline={() => setShowModal(false)}
        />
      )}
                <p className="sign-in-text">
                  Already have an account? <Link to="/register" className="sign-in-link">Sign Up</Link>
                </p>
      </div>
    </div>
  );
}