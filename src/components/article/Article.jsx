import React, { PureComponent, useEffect } from "react";
import { firedb } from "../../config/firebase";
import { Link, withRouter } from "react-router-dom";
import "../../resources/css/article.css";
import parse from "html-react-parser";
import { isEmpty } from "lodash";
import RelatedPost from "./RelatedPost";
import { Helmet } from "react-helmet";
import { useAuth } from "../authentication/context/AuthContext";
import PropTypes from "prop-types";
import { useState } from "react";
import Login from "../authentication/login";
import { render } from "react-dom";
import EditPost from "./EditPost";

const db = firedb;

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

const Article = (props) => {
  const { currentUser } = useAuth();
  const [article, setArticle] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoginCheck = () => {
    console.log("clicked")
    console.log(currentUser)
    if (!currentUser)
      render(<Login/>)
  };
  useEffect(() => {
    if (typeof props.location.state !== "undefined") {
      if (Object.prototype.hasOwnProperty.call(props.location.state, "article"))
        setArticle(props.location.state.article);
    } else {
      getArticleByID(props.match.params.id);
    }
    return () => {
      setIsLoaded(true);
    };
  }, [article]);
  const getArticleByID = (id) => {
    db.collection("spatikal-db")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setArticle(doc.data());
        } else {
          props.history.push({ pathname: "/" });
        }
      });
  };

  if (isLoaded) {
    return (
      <>
        <Helmet>
          <title>{article.title}</title>
          <meta name="description" content={article.description} />
        </Helmet>
        <br></br>
        <div className="container">
          <div className="articleDetails">
            <div className="articleBlog">
              <h5>Blog</h5>
            </div>
            <br></br>
            <div className="articleImageContainer">
              <img src={article.image} alt="articleImage" />
            </div>
            <br></br>
            <div className="articleTitle">
              <h4>{article.title}</h4>
            </div>
            <div className="bordertopArticle"></div>

            <div className="information">
              <ul className="displayFlex mobileBlock">
                <li className="padding1">
                  <i className="far fa-user"></i>
                  {article.author}&nbsp;&nbsp;
                </li>
                <li className="padding1">
                  <i className="far fa-calendar"></i>
                  {dateCreated(article.datePosted.seconds)}
                  &nbsp;&nbsp;
                </li>
                <li className="padding1">
                  <i className="far fa-folder"></i>
                  {article.category}&nbsp;&nbsp;
                </li>
              </ul>
              <div className="bordertopArticle"></div>
            </div>
            <br></br>

            {!isEmpty(article.video) ? (
              <div className="articleVideo">
                <p>
                  <strong>Watch Video</strong>
                </p>
                <br></br>
                <video controls className="videoContent">
                  <source src={article.video} type="video/mp4" />
                </video>
                <br></br>
              </div>
            ) : (
              ""
            )}

            <div className="articleContent">{parse(article.content)}</div>
          </div>
          {currentUser ? <EditPost/> : <Login/>}

          <>
            <div className="suggestionButton">
              <p>
                <span>Didn&#39;t like the content?</span>
                <span>
                  <i>Feeling like adding some suggestions?</i>
                  {/* <Link
                      to={{
                        pathname: "/editPost/" + article.id,
                      }}
                    > */}
                  <span onClick={handleLoginCheck}>Please Click Here...!!</span>
                  {/* </Link> */}
                </span>
              </p>
            </div>
          </>
          <RelatedPost category={article.category} id={article.id} />
        </div>
      </>
    );
  } else {
    return <>Loading...</>;
  }
};
Article.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  location: PropTypes.shape({
    state: PropTypes.shape({
      article: PropTypes.object.isRequired,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};
export default withRouter(Article);
