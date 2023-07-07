import { useState } from "react";
import { FaCommentSlash } from "react-icons/fa";
import { useParams } from "react-router-dom";

const BASE_URL = "http://localhost:8080";

// REGISTER
export const registerUser = async (
  username,
  password,
  fname,
  lname,
  email,
  pic
) => {
  try {
    const response = await fetch(`${BASE_URL}/games/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
          fname: fname,
          lname: lname,
          email: email,
          pic: pic,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
  return;
};

// LOGIN
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/games/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
  return;
};

// Fetch User Data
export const fetchUserData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games/users`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// User Reviews Methods
export const fetchReviews = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createNewReview = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reviewbody: reviewbody,
        userscore: userscore,
        reviewUserId: reviewUserId,
        reviewGameId: reviewGameId,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
  return;
};

export const deleteReview = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games/reviews`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: {
          reviewbody: reviewbody,
          userscore: userscore,
          reviewUserId: reviewUserId,
          reviewGameId: reviewGameId,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
  return;
};

export const updateReview = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games/reviews`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: {
          reviewbody: reviewbody,
          userscore: userscore,
          reviewUserId: reviewUserId,
          reviewGameId: reviewGameId,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
  return;
};

// Comment methods
// export const createComment = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/reviews`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: {
//           reviewbody: reviewbody,
//           userscore: userscore,
//           reviewUserId: reviewUserId,
//           reviewGameId: reviewGameId,
//         },
//       }),
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
//   return;
// };

// export const deleteComments = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/reviews`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: {
//           reviewbody: reviewbody,
//           userscore: userscore,
//           reviewUserId: reviewUserId,
//           reviewGameId: reviewGameId,
//         },
//       }),
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
//   return;
// };

// export const updateComments = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/reviews`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: {
//           reviewbody: reviewbody,
//           userscore: userscore,
//           reviewUserId: reviewUserId,
//           reviewGameId: reviewGameId,
//         },
//       }),
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
//   return;
// };
