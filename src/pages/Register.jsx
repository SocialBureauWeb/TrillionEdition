import React, { useState } from "react";
import "../css/Register.css";
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

const strengthLevels = [
  { label: "Weak", color: "#ff4d4f" },
  { label: "Medium", color: "#faad14" },
  { label: "Strong", color: "#52c41a" }
];

function getPasswordStrength(password) {
  let score = 0;
  if (password.length > 5) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[@$!%*?&#]/.test(password)) score++;
  return Math.min(score, 2);
}

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showEmailHint, setShowEmailHint] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowEmailHint(e.target.value.length > 0);
  };

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const passwordStrength = getPasswordStrength(password);
  const passwordsMatch = password && confirmPassword && password === confirmPassword;
  const canRegister = isValidEmail(email) && password && confirmPassword && passwordsMatch;

  return (
    <div className="register-container">
      <Spline
        className="spline-background"
        scene="https://prod.spline.design/McSgQY2lgxIQEpUl/scene.splinecode"
      />
      <div className="register-card">
        <img src="assets/logoblack.png" style={{width:'10%'}}/>
        <form autoComplete="off">
          <div className="input-group">
            <label htmlFor="email">Email ID</label>
            <input
              autoFocus
              id="email"
              value={email}
              onChange={handleEmailChange}
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
            />
            {showEmailHint && (
              <div className={`email-hint ${isValidEmail(email) ? "valid" : "invalid"}`}>
                {isValidEmail(email) ? "" : "Invalid email address"}
              </div>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={password}
              onChange={handlePasswordChange}
              type="password"
              placeholder="Enter your password"
              autoComplete="new-password"
            />
            {password && (
              <div className="password-strength">
                <div
                  className="strength-bar"
                  style={{
                    background: strengthLevels[passwordStrength].color,
                    width: `${(passwordStrength + 1) * 33}%`
                  }}
                />
                <span className="strength-label">
                  {strengthLevels[passwordStrength].label}
                </span>
              </div>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              type="password"
              placeholder="Confirm your password"
              autoComplete="new-password"
            />
            {confirmPassword && (
              <div className={`confirm-hint ${passwordsMatch ? "valid" : "invalid"}`}>
                {passwordsMatch ? "Passwords match" : "Passwords do not match "}
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={!canRegister}
            className="register-btn"
          >
            Register
          </button>
        </form>
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
          By signing up, you agree to our <a style={{color:'blue'}}>Terms and Privacy Policy.</a>
        </p>
        <p className="sign-in-text">
          Already have an account? <Link to="/login" className="sign-in-link">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

// import Spline from '@splinetool/react-spline';

// export default function App() {
//   return (
//     <Spline scene="https://prod.spline.design/McSgQY2lgxIQEpUl/scene.splinecode" />
//   );
// }

