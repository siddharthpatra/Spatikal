import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import "../../resources/css/cardBlog.css";
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
const Card = (props) => {
  return (
    <>
      <Link
        to={{
          pathname: "/article/" + props.data.id,
          state: { article: props.data },
        }}
      >
        <div className="cardBlog-container">
          <div className="imageBlog-container">
            <img src={props.data.image} alt="Blog_Image" />
          </div>
          <div className="cardBlog-content">
            <div className="cardBlog-details">
              <ul>
                <li>
                  <i className="far fa-user"></i>
                  {props.data.author}
                </li>
                <li>
                  <i className="far fa-calendar"></i>
                  {dateCreated(props.data.datePosted.seconds)}
                </li>
                <li>
                  <i className="far fa-folder"></i>
                  {props.data.category}
                </li>
              </ul>
            </div>
            <div className="cardBlog-title">
              <h4>{props.data.title}</h4>
            </div>
            <div className="cardBlog-body">{parse(props.data.description)}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
