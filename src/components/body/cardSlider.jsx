import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import PropTypes from "prop-types";

import "../../resources/css/cardSlider.css";

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
          <div className="cardSlider-content">
            <div className="cardSlider-title">
              <h4>{props.data.title}</h4>
            </div>
            <div className="cardSlider-body">
              {parse(props.data.description)}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
CardSlider.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
  }),
};

export default CardSlider;
