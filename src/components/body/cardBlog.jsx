import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import PropTypes from "prop-types";

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
                  <i className="fas fa-user"></i>
                  {props.data.author}
                </li>
                <li>
                  <i className="fas fa-calendar"></i>
                  {dateCreated(props.data.datePosted.seconds)}
                </li>
                <li>
                  <i className="fas fa-folder"></i>
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
Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    datePosted: PropTypes.shape({
      seconds: PropTypes.number.isRequired,
    }),
    image: PropTypes.any.isRequired,
  }),
};
export default Card;
