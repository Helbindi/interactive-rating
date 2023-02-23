import React from "react";
import thanks from "../assets/images/illustration-thank-you.svg";

function Confirmation({ rating, scores }) {
  return (
    <div className="confirm">
      <img src={thanks} alt="thank-you-image" />
      <p className="confirm-rating">
        You selected {rating} out of {scores.length}
      </p>
      <h2>Thank You!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default Confirmation;
