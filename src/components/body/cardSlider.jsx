import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import "../../resources/css/cardSlider.css";
export function dateCreated(dp) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(dp * 1000);

  return (
    months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
  );
}
const CardSlider = (props) => {
  return (
    <>
      <Link
        to={{
          pathname: "/article/" + props.data.id,
          state: { article: props.data },
        }}
      >
        <div className="cardSlider-container">
          <div className="imageSlider-container">
            <img src={props.data.image} alt="Blog_Image" />
          </div>
          <div className="card-content">
            <div className="cardSlider-title">
              <h4>{props.data.title}</h4>
            </div>
            <div className="card-body">{parse(props.data.description)}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardSlider;
