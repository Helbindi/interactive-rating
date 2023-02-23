import React from "react";
import star from "../assets/images/icon-star.svg";

function Form({ rating, setRating, setSubmitted, scores }) {
  function handleClick(e) {
    e.preventDefault;
    const newValue = e.target.innerHTML;
    if (rating === newValue) {
      setRating(null);
    } else {
      setRating(e.target.innerHTML);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <div className="form-items">
      <img className="star-img" src={star} alt="star-icon" />
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratings">
        {scores.map((score) => (
          <button
            className={score == rating ? "rating-btn active" : "rating-btn"}
            key={score}
            onClick={(e) => handleClick(e)}
          >
            {score}
          </button>
        ))}
      </div>
      <button className="submit-btn" onClick={(e) => handleSubmit(e)}>
        SUBMIT
      </button>
    </div>
  );
}

export default Form;
