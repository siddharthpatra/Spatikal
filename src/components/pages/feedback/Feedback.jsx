import React, { useState } from "react";

import { firedb } from "../../../config/firebase";
import StarRating from "./starRating";

import "../../../resources/css/feedback.css";

const db = firedb;

const Feedback = () => {
  const initialState = {
    site: 0,
    experience: 0,
    content: 0,
    comments: "",
  };
  const clearState = () => {
    console.log("reached")
    setFeedback(initialState);
  };
  const [feedback, setFeedback] = useState(initialState);

  const handleFeedback = (e) => {
    e.preventDefault();
    db.collection("spatikal-Feedbackdb")
      .add(feedback)
      .then((res) => {
        alert("Your Feedback is submitted successfuly.Thanks for your Co-operation")
        res ? (clearState()) : console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  };
  return (
    <form onSubmit={(e) => handleFeedback(e)}>
      <div className="feedbackContainer">
        <div className="feedbackContents">
          <p id="feedbackHeader" className="fontBold">
            Feedback
          </p>
          <p>
            <span>
              We believe in meeting the requirements of our audience, so please
              take&nbsp;
            </span>
            <span>
              a moment and provide us with your valuable feedback by filling out
              the&nbsp;
            </span>
            <span>form given below.</span>
          </p>
        </div>
        <div className="feedbackStarBox">
          <div className="feedbackSite">
            <div className="row">
              <div className="column floatLeft">
                <p>Site</p>
              </div>
              <div className="column floatRight">
                <StarRating
                  rating={feedback.site}
                  onRating={(rate) => setFeedback({ ...feedback, site: rate })}
                />
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="feedbackExperience">
            <div className="row">
              <div className="column floatLeft">
                <p>Experience</p>
              </div>
              <div className="column floatRight">
                <StarRating
                  rating={feedback.experience}
                  onRating={(rate) =>
                    setFeedback({ ...feedback, experience: rate })
                  }
                />
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="feedbackContent">
            <div className="row">
              <div className="column floatLeft">
                <p>Content</p>
              </div>
              <div className="column floatRight">
                <StarRating
                  rating={feedback.content}
                  onRating={(rate) =>
                    setFeedback({ ...feedback, content: rate })
                  }
                />
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="commentBox">
          <textarea type="text" placeholder="Type your comment.."></textarea>
        </div>
        <div className="submitButton displayFlex">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Feedback;
0;
