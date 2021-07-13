import React, { useEffect, useState } from "react";

import { firedb } from "../../config/firebase";
import PropTypes from "prop-types";
import Slider from "../body/slider";

const db = firedb;

const RelatedPost = (props) => {
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    getMyArticles();
  }, [props]);
  const getMyArticles = () => {
    db.collection("spatikal-db")
      .get()
      .then((docs) => {
        if (!docs.empty) {
          let allArticles = [];
          docs.forEach((doc) => {
            const article = {
              id: doc.id,
              ...doc.data(),
            };
            allArticles.push(article);
          });
          setFiltered(
            allArticles
              .slice()
              .filter(
                (a) =>
                  (a.category.includes(props.category) ||
                    props.category.includes(a.category)) &&
                  a.id !== props.id
              )
          );
        }
      });
  };

  return (
    <>
      <br></br>
      {filtered.length > 0 && (
        <>
          <h5>Related Posts</h5>
          <div className="displayFlex mobileGrid">
            <Slider article={filtered} />
          </div>
        </>
      )}
    </>
  );
};
RelatedPost.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RelatedPost;
