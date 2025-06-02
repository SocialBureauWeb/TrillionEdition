import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    // TODO: Send reset password request
    setSubmitted(true);
  };

  return (
    <div className="login-card">
      <img src="assets/logoblack.png" alt="Logo" style={{ width: '10%' }} />
      <h2>Reset Password</h2>
      {submitted ? (
        <div className="success-message">
          Your password has been reset!<br /><br />
          <Link to="/" className="sign-in-link">Sign In</Link>
        </div>
      ) : (
        <form autoComplete="off" className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="password" className="sr-only">New Password</label>
            <div className="input-wrapper">
              <LockClosedIcon className="input-icon" />
              <input
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="New Password"
                autoComplete="new-password"
                required
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="confirm" className="sr-only">Confirm New Password</label>
            <div className="input-wrapper">
              <LockClosedIcon className="input-icon" />
              <input
                id="confirm"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                type="password"
                placeholder="Confirm New Password"
                autoComplete="new-password"
                required
              />
            </div>
          </div>
          {error && (
            <div className="error-message">{error}</div>
          )}
          <button
            type="submit"
            disabled={!password || !confirm}
            className="login-btn"
          >
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
}