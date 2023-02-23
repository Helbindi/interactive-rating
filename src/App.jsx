import React, { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";
import "./index.css";

function App() {
  const [rating, setRating] = useState();
  const [submitted, setSubmitted] = useState(false);
  const scores = [1, 2, 3, 4, 5];

  return (
    <div className="rating-container">
      {!submitted && (
        <Card>
          <Form
            rating={rating}
            setRating={setRating}
            setSubmitted={setSubmitted}
            scores={scores}
          />
        </Card>
      )}

      {submitted && (
        <Card>
          <Confirmation rating={rating} scores={scores} />
        </Card>
      )}
    </div>
  );
}

export default App;
