import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="login-card" style={{ padding: '10vh',textAlign:'center' }}>
      <img src="assets/logoblack.png" alt="Logo" style={{ width: '10%' }} />
      <h2>Forgot Password</h2>
      {submitted ? (
        <div className="success-message">
          If an account with <b>{email}</b> exists, we’ve sent you a password reset link.
          <br /><br />
          <Link to="/" className="sign-in-link">Back to Sign In</Link>
        </div>
      ) : (
        <form autoComplete="off" className="login-form" style={{width:'100%'}} onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="input-wrapper">
              <EnvelopeIcon className="input-icon" />
              <input
                autoFocus
                id="email"
                value={email}
                onChange={handleEmailChange}
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={!email}
            className="login-btn"
          >
            Send Reset Link
          </button>
        </form>
      )}
      
    </div>
  );
}