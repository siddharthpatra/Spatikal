import React, { Component } from "react";
import Card from "../body/cardBlog";
// import Slider from "../body/slider";
import PropTypes from "prop-types";
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

      case "Social and Culture":
        this.setState(
          {
            articles: this.props.location.state.article
              .slice()
              .filter((article) =>
                article.category.toLowerCase().includes("social and culture")
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
      case "Sports and Entertainment":
        this.setState(
          {
            articles: this.props.location.state.article
              .slice()
              .filter((article) =>
                article.category
                  .toLowerCase()
                  .includes("sports and entertainment")
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
      case "Finance":
        this.setState(
          {
            articles: this.props.location.state.article
              .slice()
              .filter((article) =>
                article.category.toLowerCase().includes("finance")
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
    if (this.state.isLoaded) {
      return (
        <div className="container">
          <div>
            <p>
              <span>{this.state.category}</span>
            </p>
          </div>
          <div className="">
            {this.state.articles.map((article, index) => {
              return <Card key={index} data={article} />;
            })}
          </div>
          {/* <div className="displayFlex mobileGrid">
            <Slider article={this.state.articles.slice(3, this.state.articles.length)} />
          </div> */}
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
Category.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string.isRequired,
    }),
  }),
  location: PropTypes.shape({
    state: PropTypes.shape({
      article: PropTypes.array.isRequired,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};
export default Category;
