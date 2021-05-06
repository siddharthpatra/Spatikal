import { isEmpty } from "lodash";
import React, { Component, lazy, Suspense } from "react";

import firebase from "../../config/firebase";

const Card = lazy(() => import("../body/card"));

const db = firebase.firestore();

class RelatedPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: {},
      filtered: {},
    };
  }

  componentDidMount() {
    this.getMyArticles();
  }

  componentWillReceiveProps() {
    this.getMyArticles();
  }
  getMyArticles = () => {
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
          this.setState(
            {
              articles: allArticles,
            },
            () => {
              this.setState({
                filtered: allArticles
                  .slice()
                  .filter(
                    (a) =>
                      (a.category.includes(this.props.category) ||
                        this.props.category.includes(a.category)) &&
                      a.id !== this.props.id
                  ),
              });
            }
          );
        }
      });
  };

  render() {
    return (
      <>
        {!isEmpty(this.state.filtered) ? (
          <>
            <h1>Related Posts</h1>
            <div className="displayFlex mobileGrid flexWrap">
              {this.state.filtered.map((article, index) => {
                return (
                  <Suspense fallback={<div></div>}>
                    <Card key={index} data={article} />
                  </Suspense>
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default RelatedPost;
