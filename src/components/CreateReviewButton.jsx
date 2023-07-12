import React, { useState } from "react";
import { createNewReview } from "../api-routes";
import "./deleteReviewButton.css";
import "./reviews.css";

function CreateReviewButton() {
  const [newReview, setNewReview] = useState("");

  const handleSubmit = async (e) => {
    const response = createNewReview();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="new review"></label>
        <input
          id="review-body"
          name="reviewbody"
          type="text"
          placeholder="What did you think of the game"
          value={newReview}
          onChange={(e) => {
            setNewReview(e.target.value);
          }}
        />
        <button className="button-reviews" type="submit">
          Review
        </button>
      </form>
    </div>
  );
}

export default CreateReviewButton;
