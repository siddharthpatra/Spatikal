import React, { Component, lazy, Suspense, } from 'react'
import Navbar from '../header/Navbar';

const Card = lazy(()=> import('../body/card'))

class Category extends Component {

    constructor(props) {
        super(props);
        this.state={
            articles:{},
            category: '',
            isLoaded: false
        }
    }

    componentDidMount() {
        switch (this.props.match.params.category) {
            case "Food and Drinks":
                this.setState({
                    articles: this.props.location.state.article.slice().filter((article) => article.category.toLowerCase().includes("food and drinks")),
                    category: this.props.match.params.category
                }, () => {
                    this.setState({
                        isLoaded: true
                    })
                })
                break;

                case "Health and Fitness":
                    this.setState({
                        articles: this.props.location.state.article.slice().filter((article) => article.category.toLowerCase().includes("health and fitness")),
                        category: this.props.match.params.category
                    }, () => {
                        this.setState({
                            isLoaded: true
                        })
                    })
                break;

                case "Science and Technology":
                    this.setState({
                        articles: this.props.location.state.article.slice().filter((article) => article.category.toLowerCase().includes("science and technology")),
                        category: this.props.match.params.category
                    }, () => {
                        this.setState({
                            isLoaded: true
                        })
                    })
                break;

                case "Business and Economy":
                    this.setState({
                        articles: this.props.location.state.article.slice().filter((article) => article.category.toLowerCase().includes("business and economy")),
                        category: this.props.match.params.category
                    }, () => {
                        this.setState({
                            isLoaded: true
                        })
                    })
                break;

                case "Tours and Travels":
                    this.setState({
                        articles: this.props.location.state.article.slice().filter((article) => article.category.toLowerCase().includes("tours and travels")),
                        category: this.props.match.params.category
                    }, () => {
                        this.setState({
                            isLoaded: true
                        })
                    })
                break;

                case "Culture and Heritage":
                    this.setState({
                        articles: this.props.location.state.article.slice().filter((article) => article.category.toLowerCase().includes("culture")),
                        category: this.props.match.params.category
                    }, () => {
                        this.setState({
                            isLoaded: true
                        })
                    })
                break;

            default:
                this.props.history.push({pathname:'/'})
                break;
        }
    }

    render () {
        return (
            <>
                <Navbar/>
                {this.state.category}

                <div className="displayFlex mobileGrid flexWrap">
                    {
                        this.state.isLoaded ? this.state.articles.map((article, index) => {
                            return (
                                <Suspense fallback={<div></div>}>
                                <Card
                                key= {index}
                                data ={article}/>
                                </Suspense>
                            )
                        } ) : ""
                    }
                </div>
            </>
        )
    }
}

export default Category