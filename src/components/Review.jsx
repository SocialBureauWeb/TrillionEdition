import React, { useState } from "react";

const feedbacks = [
  {
    id: 1,
    name: "Robert Karmazov",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4,
    text: "Auctor magnis prim vitae laoreet ultrices ultricies diam. Sed duis mattis cras lacus donec. Aliquam",
  },
  {
    id: 2,
    name: "Robert Karmazov",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
    text: "Auctor magnis prim vitae laoreet ultrices ultricies diam. Sed duis mattis cras lacus donec. Aliquam",
  },
  {
    id: 3,
    name: "Robert Karmazov",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4,
    text: "Auctor magnis prim vitae laoreet ultrices ultricies diam. Sed duis mattis cras lacus donec. Aliquam",
  },
];

const Star = ({ filled, onClick, animated }) => (
  <span
    className={`star-icon${animated ? " animated" : ""}`}
    style={{
      color: filled ? "#FFC107" : "#3e5942",
      fontSize: "22px",
      cursor: onClick ? "pointer" : "default",
      marginRight: 2,
      filter: filled ? "drop-shadow(0 0 2px #8B0000)" : "none",
      transition: "color 0.2s, transform 0.2s",
    }}
    onClick={onClick}
  >
    ★
  </span>
);

export default function FeedbackReview() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    review: "",
  });
  const [buttonAnim, setButtonAnim] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonAnim(true);
    setTimeout(() => setButtonAnim(false), 350);
    setTimeout(() => {
      alert("Review submitted!");
      setForm({ name: "", email: "", review: "" });
      setRating(0);
    }, 400);
  };

  return (
    <div className="feedback-review-container">
      <div className="feedbacks-column">
        <h2>Recent Feedbacks</h2>
        {feedbacks.map((fb, idx) => (
          <div
            key={fb.id}
            className="feedback-card"
            style={{ animationDelay: `${idx * 0.08 + 0.1}s` }}
          >
            <img src={fb.img} alt={fb.name} className="user-avatar" />
            <div className="feedback-content">
              <div className="feedback-header">
                <span className="user-name">{fb.name}</span>
                <span className="stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} filled={i <= fb.rating} />
                  ))}
                </span>
              </div>
              <p className="feedback-text">{fb.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="review-column">
        <h2>Add a Review</h2>
        <form className="review-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label>
              Add Your Rating <span className="required">*</span>
            </label>
            <div>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  filled={i <= (hoverRating || rating)}
                  onClick={() => setRating(i)}
                  animated={hoverRating === i}
                  onMouseEnter={() => setHoverRating(i)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="John.Doe@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>
              Write Your Review <span className="required">*</span>
            </label>
            <textarea
              name="review"
              placeholder="Write here..."
              value={form.review}
              onChange={handleChange}
              required
            />
          </div>

          {/* Modern Animated Button */}
          <button
            type="submit"
            className={`animated-button${buttonAnim ? " pulse" : ""}`}
            disabled={buttonAnim}
          >
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className="text">Submit</span>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      <style>{`
        .feedback-review-container {
          display: flex;
          gap: 32px;
          padding: 40px 20px;
          font-family: 'Inter', Arial, sans-serif;
          justify-content: center;
          min-height: 100vh;
        }
        .feedbacks-column {
          flex: 1.2;
          max-width: 480px;
        }
        .feedbacks-column h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: #FFC107;
          letter-spacing: 0.5px;
        }
        .feedback-card {
        color:white;
          display: flex;
          background:rgb(0, 0, 0);
          border-radius: 16px;
          box-shadow: 0 2px 10px 0 rgba(34,34,34,0.13);
          margin-bottom: 18px;
          padding: 22px 20px;
          align-items: flex-start;
          gap: 18px;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInCard 0.42s cubic-bezier(.75,0,.25,1) forwards;
        }
        @keyframes fadeInCard {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .user-avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          object-fit: cover;
          background: var(--bg-dark);
          box-shadow: 0 1px 5px 0 rgba(50,50,50,0.12);
          transition: border 0.2s;
        }
        .feedback-content {
          flex: 1;
        }
        .feedback-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.05rem;
        }
        .user-name {
          font-weight: 600;
          color: #8B0000;
          letter-spacing: 0.2px;
        }
        .stars {
          margin-left: 8px;
          display: inline-block;
        }
        .feedback-text {
          margin: 10px 0 0 0;
          font-size: 0.99rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .review-column {
          flex: 1;
          max-width: 450px;
        }
        .review-column h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 18px;
          color: #FFC107;
          letter-spacing: 0.5px;
        }
        .review-form {
          background: none;
          box-shadow: none;
          border: none;
          padding: 0;
        }
        .form-group {
          margin-bottom: 19px;
        }
        .form-group label {
          display: block;
          font-size: 1rem;
          color: white;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .required {
          color: red;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          border: 1.5px solid #8B0000;
          background:black;
          border-radius: 8px;
          padding: 11px 14px;
          font-size: 1rem;
          font-family: inherit;
          color: white;
          resize: none;
          transition: border 0.2s, background 0.2s;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border: 1.5px solid yellow;
          outline: none;
        }
        .form-group textarea {
          min-height: 85px;
          max-height: 180px;
        }
        .star-icon {
          display: inline-block;
          transition: color 0.22s, transform 0.23s cubic-bezier(.47,1.64,.41,.8);
          will-change: color, transform;
        }
        .star-icon:hover,
        .star-icon.animated {
          transform: scale(1.22) rotate(-12deg);
          color: #FFC107 !important;
          filter: drop-shadow(0 0 6px #FFC107);
        }

        /* Modern Animated Button from Uiverse.io by gharsh11032000 */
        .animated-button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 16px 36px;
          border: 4px solid;
          border-color: transparent;
          font-size: 16px;
          background-color: inherit;
          border-radius: 100px;
          font-weight: 600;
          color: #FFC107 ;
          box-shadow: 0 0 0 2px #FFC107;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animated-button svg {
          position: absolute;
          width: 24px;
          fill: #FFC107;
          z-index: 9;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animated-button .arr-1 {
          right: 16px;
        }
        .animated-button .arr-2 {
          left: -25%;
        }
        .animated-button .circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background-color: #FFC107;
          border-radius: 50%;
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animated-button .text {
          position: relative;
          z-index: 1;
          transform: translateX(-12px);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animated-button:hover {
          box-shadow: 0 0 0 12px transparent;
          color: #212121;
          border-radius: 12px;
        }
        .animated-button:hover .arr-1 {
          right: -25%;
        }
        .animated-button:hover .arr-2 {
          left: 16px;
        }
        .animated-button:hover .text {
          transform: translateX(12px);
        }
        .animated-button:hover svg {
          fill: #212121;
        }
        .animated-button:active {
          scale: 0.95;
          box-shadow: 0 0 0 4px greenyellow;
        }
        .animated-button:hover .circle {
          width: 220px;
          height: 220px;
          opacity: 1;
        }
        .animated-button.pulse {
          animation: btnPulse 0.33s cubic-bezier(.47,1.64,.41,.8);
        }
        @keyframes btnPulse {
          0%   { transform: scale(1);}
          50%  { transform: scale(1.09);}
          100% { transform: scale(1);}
        }

        @media (max-width: 900px) {
          .feedback-review-container {
            flex-direction: column;
            gap: 38px;
          }
          .feedbacks-column, .review-column {
            max-width: 100%;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}