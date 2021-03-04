import React, { useEffect, useState, Component } from 'react'
import firebase from '../../config/firebase'
import {withRouter} from 'react-router-dom'
import Navbar from '../header/Navbar';

import parse from 'html-react-parser'

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

const Article = (props) => {

    const[isLoaded,setIsLoaded] = useState(false)
    const [article,setArticle] = useState([])

    useEffect(()=> {
        setIsLoaded(true)
    },[article])

     const getArticleByID = (aid) => {
         db.collection('spatikal-db')
         .doc(aid)
         .get()
         .then(doc=> {
             if(doc.exists){
                 setArticle(doc.data())
             }
             else {
                 props.history.push({pathname:'/'})
         }
         })
     }

    useEffect(()=> {
        if(typeof props.location.state !== 'undefined'){
            if(props.location.state.hasOwnProperty('article'))
            setArticle(props.location.state.article)
        }
         else {
             getArticleByID(props.match.params.id)
         }
    },[])

    if(isLoaded){
        return (
            <>
                <Navbar/>
                <h1>{article.title}</h1>
                <h6>{dateCreated(article.datePosted.seconds)}</h6>
                <h6>{article.author}</h6>
                <h6>{article.category}</h6>
                <h3>{parse(article.content)}</h3>
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
export default withRouter(Article)