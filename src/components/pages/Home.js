import React, { useEffect, useState } from 'react'

import firebase from "../../config/firebase"

import Banner from '../body/banner'
import Card from '../body/card'
import Navbar from '../header/Navbar'
import Carousel from '../body/carousel'

import '../../resources/css/home.css'
import '../../resources/css/mobile.css'
import '../../resources/css/footer.css'


const db = firebase.firestore()



const About = () => {

    const [isLoaded, setIsLoaded] = useState(false)
    const [articles,setArticles] = useState([])
    const [sorting,setSorting] = useState([])
    const [isSorted, setIsSorted] = useState(false)

    useEffect(() => {
        getMyArticles()
    },[])
    useEffect(()=>{
        setIsLoaded(true)
    },[articles])
    useEffect(()=>{
        setIsSorted(true)
    },[sorting])
    const getMyArticles = ()=> {
        db.collection('spatikal-db')
        .get()
        .then(docs => {
            if(!docs.empty){
                let allArticles = []
                docs.forEach(doc => {
                    const article = {
                        id: doc.id,
                        ...doc.data()
                    }
                    allArticles.push(article)
                })
                setArticles(allArticles)
                setSorting(allArticles.slice().sort( (a,b) => b.datePosted - a.datePosted ))
            }
        })
    }

    return (
        <>
            <Navbar/>
            <Banner/>
            <Carousel/>

            <div className="container">
                <div className="bordertop"></div>
                <div className="content">
                    <p><i>Recent Posts</i></p>
                    <div className="displayFlex mobileGrid flexWrap">
                    {
                        isSorted ? sorting.slice(0,3).map((article, index) => {
                            return (
                                <Card
                                key= {index}
                                data ={article}/>
                            )
                        } ) : ""
                    }
                    </div>
                </div>
                <div className="bordertop"></div>
                <div className="content">
                    <p><i>Collections</i></p>
                </div>
                <div className="displayFlex mobileGrid flexWrap">
                    {
                        isLoaded ? articles.map((article, index) => {
                            return (
                                <Card
                                key= {index}
                                data ={article}/>
                            )
                        } ) : ""
                    }
                </div>
                <div className="bordertop"></div>
                    <div className="content">
                        <p><i>Categories</i></p>
                    </div>
            </div>
        </>
    )
}

export default About