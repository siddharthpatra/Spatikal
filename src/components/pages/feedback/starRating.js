import React from "react";
import "../../../resources/css/Star.css";

const starRating = (props) => {
  return (
    <div id="starContainer displayFlex">
      {[...Array(5)].map((star, index) => {
          const ratingValue = i+1
        return (<label>
          <input type="radio" name="rating" className="radioInput" />
          <i class="far fa-star" onClick={props.starValue}></i>
        </label>)
      })}
    </div>
  );
};
export default starRating;
