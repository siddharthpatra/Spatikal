import { isEmpty } from "lodash";
import React, { Component, lazy, Suspense } from "react";

import firebase from "../../config/firebase";

import Slider from "../body/slider";

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
            <br></br>
            <h5>Related Posts</h5>

            <div className="displayFlex mobileGrid">
              <Slider article={this.state.filtered} />
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
