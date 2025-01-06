import React, { useState } from "react";
import "./Feedback.css";
import { FaCommentDots } from "react-icons/fa";

const Feedback: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFeedback = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-icon" onClick={toggleFeedback}>
        <FaCommentDots />
      </div>
      {isOpen && (
        <div className="feedback-form">
          <h3>Leave Feedback</h3>
          <textarea placeholder="Write your feedback here..." rows={5} />
          <button>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Feedback;
