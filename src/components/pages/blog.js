import React, { lazy, Suspense, useState, useEffect } from "react";
import { firedb } from "../../config/firebase";

const Card = lazy(() => import("../body/card"));

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
        <div className="displayFlex mobileGrid flexWrap">
          {articles.map((article, index) => {
            return (
              <Suspense fallback={<div></div>}>
                <Card key={index} data={article} />
              </Suspense>
            );
          })}
        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Blog;
