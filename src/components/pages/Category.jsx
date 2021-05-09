import React, { Component, lazy, Suspense } from "react";
const Card = lazy(() => import("../body/card"));
const CardSlider = lazy(() => import("../body/cardSlider"));

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: {},
      category: "",
      isLoaded: false,
    };
  }

  componentDidMount() {
    switch (this.props.match.params.category) {
      case "Food and Drinks":
        this.setState(
          {
            articles: this.props.location.state.article
              .slice()
              .filter((article) =>
                article.category.toLowerCase().includes("food and drinks")
              ),
            category: this.props.match.params.category,
          },
          () => {
            this.setState({
              isLoaded: true,
            });
          }
        );
        break;

      case "Health and Fitness":
        this.setState(
          {
            articles: this.props.location.state.article
              .slice()
              .filter((article) =>
                article.category.toLowerCase().includes("health and fitness")
              ),
            category: this.props.match.params.category,
          },
          () => {
            this.setState({
              isLoaded: true,
            });
          }
        );
        break;

      case "Science and Technology":
        this.setState(
          {
            articles: this.props.location.state.article
              .slice()
              .filter((article) =>
                article.category
                  .toLowerCase()
                  .includes("science and technology")
              ),
            category: this.props.match.params.category,
          },
          () => {
            this.setState({
              isLoaded: true,
            });
          }
        );
        break;

      case "Business and Economy":
        this.setState(
          {
            articles: this.props.location.state.article
              .slice()
              .filter((article) =>
                article.category.toLowerCase().includes("business and economy")
              ),
            category: this.props.match.params.category,
          },
          () => {
            this.setState({
              isLoaded: true,
            });
          }
        );
        break;

      case "Tours and Travels":
        this.setState(
          {
            articles: this.props.location.state.article
              .slice()
              .filter((article) =>
                article.category.toLowerCase().includes("tours and travels")
              ),
            category: this.props.match.params.category,
          },
          () => {
            this.setState({
              isLoaded: true,
            });
          }
        );
        break;

      case "Culture and Heritage":
        this.setState(
          {
            articles: this.props.location.state.article
              .slice()
              .filter((article) =>
                article.category.toLowerCase().includes("culture")
              ),
            category: this.props.match.params.category,
          },
          () => {
            this.setState({
              isLoaded: true,
            });
          }
        );
        break;

      default:
        this.props.history.push({ pathname: "/" });
        break;
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          <p>{this.state.category}</p>
        </div>
        <div className="">
          {this.state.isLoaded
            ? this.state.articles.slice(0, 3).map((article, index) => {
                return (
                  <Suspense fallback={<div></div>}>
                    <Card key={index} data={article} />
                  </Suspense>
                );
              })
            : ""}
        </div>
        <div className="displayFlex">
          {this.state.isLoaded
            ? this.state.articles
                .slice(3, this.state.articles.length)
                .map((article, index) => {
                  return (
                    <Suspense fallback={<div></div>}>
                      <CardSlider key={index} data={article} />
                    </Suspense>
                  );
                })
            : ""}
        </div>
      </div>
    );
  }
}

export default Category;
