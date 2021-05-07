import React, { useState } from "react";

import { firedb } from "../../../config/firebase";
import StarRating from "./starRating";

const db = firedb;

const Feedback = () => {
  const initialState = {
    site: "",
    experience: "",
    content: "",
    comments: "",
  };
  const clearState = () => {
    setFeedback({ ...initialState });
  };
  const [feedback, setFeedback] = useState(initialState);
  // db.collection("spatikal-Feedbackdb")
  //   .add(feedback)
  //   .then((res) => {
  //     clearState();
  //   });
  return (
    <>
      <div className="feedbackContainer">
        <div className="feedbackContent">
          <p>
            <span>
              We believe in meeting the requirements of our audience, so please
              take
            </span>
            <span>
              a moment and provide us with your valuable feedback by filling out
              the
            </span>
            <span>form given below.</span>
          </p>
        </div>
        <div className="feedbackStarBox">
          <div className="feedbackSite">
            <div className="displayFlex">
              <p>Site</p>
              <StarRating />
            </div>
          </div>
          <div className="feedbackExperience">
            <div className="displayFlex">
              <p>Experience</p>
              <StarRating />
            </div>
          </div>
          <div className="feedbackContent">
            <div className="displayFlex">
              <p>Content</p>
              <StarRating />
            </div>
          </div>
        </div>
        <div className="commentBox">
          <input type="text" placeholder="Type your comment.." />
        </div>
      </div>
    </>
  );
};

export default Feedback;
0;
