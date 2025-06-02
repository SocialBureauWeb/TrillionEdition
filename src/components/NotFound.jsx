import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/NotFound.css"; // See CSS below

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-bg">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">Page Not Found</p>
        <button className="notfound-btn" onClick={() => navigate(-1)}>
          <span className="notfound-btn-arrow">←</span> Go Back
        </button>
      </div>
    </div>
  );
}