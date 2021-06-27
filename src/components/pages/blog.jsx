import React, { lazy, Suspense, useState, useEffect } from "react";
import { firedb } from "../../config/firebase";
import { ImSpinner2 } from "react-icons/im";
const Card = lazy(() => import("../body/cardBlog"));
// import Slider from "../body/slider";

const db = firedb;

const Blog = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) getMyArticles();
    return () => (isSubscribed = false);
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
        <div className="container">
          <Suspense fallback={<div>Loading. Please Wait...</div>}>
            {articles.map((article, index) => (
              <Card key={index} data={article} />
            ))}
          </Suspense>
        </div>
        {/* <div className="displayFlex mobileGrid">
          <Slider article={articles.slice(3, articles.length)} />
        </div> */}
      </>
    );
  } else {
    return <ImSpinner2 />;
  }
};

export default Blog;
