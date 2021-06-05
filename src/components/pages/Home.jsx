import React, { lazy, Suspense, useEffect, useState } from "react";

import { firedb } from "../../config/firebase";

import Banner from "../body/banner";
import Slider from "../body/slider";
import Feedback from "../feedback/Feedback";
import Card from "../body/card";

import "../../resources/css/home.css";
import "../../resources/css/mobile.css";
import "../../resources/css/footer.css";
import { Link } from "react-router-dom";

const db = firedb;

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    getMyArticles();
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    setIsSorted(true);
  }, [articles, sorting]);

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
          setSorting(
            allArticles.slice().sort((a, b) => b.datePosted - a.datePosted)
          );
        }
      });
  };

  return (
    <>
      <Banner />

      <div className="container">
        <div className="bordertop"></div>
        <div className="content">
          <div className="sectionTitle">
            <p>
              <i>R E C E N T&nbsp;&nbsp;&nbsp;&nbsp;P O S T S</i>
            </p>
          </div>

          <div className="displayFlex mobileGrid">
            {isSorted
              ? sorting.slice(0, 3).map((article, index) => {
                  return <Card key={index} data={article} />;
                })
              : ""}
          </div>
        </div>
        {/* <div className="bordertop"></div>  */}
        <br></br>
        <div className="content">
          <div className="sectionTitle">
            <p>
              <i>C O L L E C T I O N S</i>
            </p>
          </div>
        </div>
        <div className="displayFlex mobileGrid">
          {isLoaded ? <Slider article={articles} /> : ""}
        </div>
        {/* <div className="bordertop"></div> */}
        <br></br>
        <div className="content">
          <div className="sectionTitle">
            <p>
              <i>C A T E G O R I E S</i>
            </p>
          </div>
        </div>
        <div className="catogeriesContent">
          <p>
            <br></br>
            <i>All the things to talk about!</i>
          </p>
          <br></br>
          <div>
            <div className="row">
              <Link
                to={{
                  pathname: "/category/" + encodeURI("Food and Drinks"),
                  state: { article: articles },
                }}
              >
                <div className="column floatLeft">
                  {" "}
                  <i className="fas fa-hamburger"></i>
                  <p>Food and Drinks</p>
                </div>
              </Link>

              <Link
                to={{
                  pathname: "/category/" + encodeURI("Health and Fitness"),
                  state: { article: articles },
                }}
              >
                <div className="column floatRight">
                  <i className="fas fa-dumbbell"></i>
                  <p>Health and Fitness</p>
                </div>
              </Link>
            </div>
            <div className="clear"></div>
          </div>
          <div>
            <div className="row">
              <Link
                to={{
                  pathname: "/category/" + encodeURI("Science and Technology"),
                  state: { article: articles },
                }}
              >
                <div className="column floatLeft">
                  <i className="fas fa-rocket"></i>
                  <p>Science and Technology</p>
                </div>
              </Link>
              <Link
                to={{
                  pathname: "/category/" + encodeURI("Business and Economy"),
                  state: { article: articles },
                }}
              >
                <div className="column floatRight">
                  <i className="fas fa-chart-bar"></i>
                  <p>Business and Economy</p>
                </div>
              </Link>
            </div>
            <div className="clear"></div>
          </div>

          <div>
            <div className="row">
              <Link
                to={{
                  pathname: "/category/" + encodeURI("Tours and Travels"),
                  state: { article: articles },
                }}
              >
                <div className="column floatLeft">
                  <i className="fas fa-place-of-worship"></i>
                  <p>Tours and Travels</p>
                </div>
              </Link>
              <Link
                to={{
                  pathname: "/category/" + encodeURI("Social and Culture"),
                  state: { article: articles },
                }}
              >
                <div className="column floatRight">
                  <i className="fas fa-dharmachakra"></i>
                  <p>Social and Culture</p>
                </div>
              </Link>
            </div>

            <div className="clear"></div>
          </div>
          <div>
            <div className="row">
              <Link
                to={{
                  pathname: "/category/" + encodeURI("Sports and Entertainment"),
                  state: { article: articles },
                }}
              >
                <div className="column floatLeft">
                  <i className="fas fa-running"></i>
                  <p>Sports and Entertainment</p>
                </div>
              </Link>
              <Link
                to={{
                  pathname: "/category/" + encodeURI("Finance"),
                  state: { article: articles },
                }}
              >
                <div className="column floatRight">
                  <i className="fas fa-money-check-alt"></i>
                  <p>Finance</p>
                </div>
              </Link>
            </div>

            <div className="clear"></div>
          </div>
        </div>
        <Feedback />{" "}
      </div>
    </>
  );
};

export default Home;
