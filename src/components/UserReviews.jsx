import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import "./userReviews.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteReviewButton from "./DeleteReviewButton";
// import { UpdateReviewsButton } from "./UpdateReviewButton";
import UserReviewLocalEdit from "./UserReviewLocalEdit";

const BASE_URL = "http://localhost:8080";

function UserReviews(props) {
  const [filteredReview, setFilteredReview] = useState("");
  const [user, setUser] = useState([]);




  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      // console.log(user);
      setUser(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    async function userReviewPage() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${BASE_URL}/api/games/user/specific/reviews`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Outside of fetch starting here.
        const result = await response.json();

        // console.log(result);
        // console.log(props.userData)
        setFilteredReview(result);
        // return result;
      } catch (error) {
        console.log(error);
      }
    }
    userReviewPage();
  }, []);

  // useEffect(() => {
  //   if (props.allGames.gameId === filteredReview.reviewGameId) {
  //     setReviewGameTitle(props.allGames.title);
  //     console.log(reviewGameTitle)
  //   }
  // }, []);

  return (
    <>
      <div className="profile-nav">
        <ul>
          <li>
            <Link to="/mycomments">Comments</Link>
          </li>
          <li>
            {" "}
            <Link to="/myreviews">Reviews</Link>
          </li>
        </ul>
        <div className="border-line"></div>
      </div>

      {/* REVIEWS */}
      <div className="user-review-card">
        <div className="user-title-center">
          <h1>Your Reviews</h1>
        </div>
        {filteredReview && filteredReview.length ? (
          filteredReview.map((reviewEl) => {
            return (
              <UserReviewLocalEdit
                reviewEl={reviewEl}
                user={user}
                filteredReview={filteredReview}
                setFilteredReview={setFilteredReview}
              />
            );
          })
        ) : (
          <p>No Reviews Yet</p>
        )}
      </div>
    </>
  );
}

export default UserReviews;
