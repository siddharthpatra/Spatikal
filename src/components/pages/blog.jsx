import React, { lazy, Suspense, useState, useEffect } from "react";
import { firedb } from "../../config/firebase";

const Card = lazy(() => import("../body/card"));
import Slider from "../body/slider";

const db = firedb;

const Blog = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getMyArticles();
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, [articles]);

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
          setArticles(allArticles);
        }
      });
  };

  if (isLoaded) {
    return (
      <>
        <div className="">
          {articles.slice(0, 3).map((article, index) => {
            return (
              <Suspense fallback={<div></div>}>
                <Card key={index} data={article} />
              </Suspense>
            );
          })}
        </div>
        <div className="displayFlex mobileGrid">
          <Slider article={articles.slice(3, articles.length)} />
        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Blog;
