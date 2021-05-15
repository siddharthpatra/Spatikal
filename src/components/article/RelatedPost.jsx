import React, { useEffect, useState } from "react";

import { firedb } from "../../config/firebase";

import Slider from "../body/slider";

const db = firedb;

const RelatedPost = (props) => {
  const [filtered, setFiltered] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getMyArticles();
  }, []);
  useEffect(() => {
    setIsLoaded(true);
  }, [filtered]);
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

  return isLoaded ? (
    <>
      <br></br>
      <h5>Related Posts</h5>

      <div className="displayFlex mobileGrid">
        <Slider article={filtered} />
      </div>
    </>
  ) : (
    ""
  );
};

export default RelatedPost;
