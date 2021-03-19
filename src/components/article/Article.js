import React, { Component } from 'react'
import firebase from '../../config/firebase'
import {withRouter} from 'react-router-dom'
import Navbar from '../header/Navbar';
import '../../resources/css/article.css'
import parse from 'html-react-parser'
import { isEmpty } from 'lodash'

const db = firebase.firestore();

export function dateCreated (dp) {
    const months = [ 
        "January", "February",  
        "March", "April", "May",  
        "June", "July", "August", 
        "September", "October",  
        "November", "December" 
    ];
    const date = new Date(dp*1000)

    return months[date.getMonth()]+ ' ' + date.getDate() + ', ' + date.getFullYear()
}


class Article extends Component {
    constructor(props) {
        super(props);
        this.state={
            article:{},
            isLoaded: false
        }
    }
    componentDidMount() {
        if(typeof this.props.location.state !== 'undefined'){
            if(this.props.location.state.hasOwnProperty('article'))
            this.setState({
                article: this.props.location.state.article
            }, () => {
                this.setState({
                    isLoaded: true
                })
            })
        }
         else {
             this.getArticleByID(this.props.match.params.id)
         }
    }
    getArticleByID = (id) => {
        db.collection('spatikal-db')
        .doc(id)
        .get()
        .then(doc=> {
            if(doc.exists){
                this.setState({
                    article: doc.data()
                }, () => this.setState({
                    isLoaded: true
                }))
            }
            else {
                this.props.history.push({pathname:'/'})
        }
        })
    }
    render () {
        if(this.state.isLoaded){
            return (
                <>
                    <Navbar/>
                    <br></br>
                    <div className="container">
                        <div className="articleDetails">
                            <div className="articleBlog">
                                <h3>Blog</h3>
                            </div>
                            <br></br>
                           <div className="articleImageContainer">
                                <img src={this.state.article.image} alt="articleImage"/>
                            </div>
                            <br></br>
                            <div className="articleTitle">
                                <h4>{this.state.article.title}</h4>
                            </div>
                            <div className="bordertop"></div>
                            
                            <div className="information">
                                <ul className="displayFlex mobileBlock">
                                    <li className="padding1"><i className="far fa-user"></i>{this.state.article.author}&nbsp;&nbsp;</li>
                                    <li className="padding1"><i className="far fa-calendar"></i>{dateCreated(this.state.article.datePosted.seconds)}&nbsp;&nbsp;</li>
                                    <li className="padding1"><i className="far fa-folder"></i>{this.state.article.category}&nbsp;&nbsp;</li>
                                </ul>
                                <div className="bordertop"></div>
                            </div>

                           {
                                !isEmpty(this.state.article.video) ?  <div className="articleVideo">
                                        <p><strong>Watch</strong></p>
                                        <video controls className="videoContent">
                                            <source src={this.state.article.video} type="video/mp4"/>
                                        </video>
                                    </div> : ''
                            }

                            <div className="articleContent">
                                {parse(this.state.article.content)}
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else
       { return (
            <>
             Loading...
            </>
        )}
    }
}
export default withRouter(Article)