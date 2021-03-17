import React, { lazy, Suspense, useEffect, useState } from 'react'

import firebase from "../../config/firebase"

import Banner from '../body/banner'
import Navbar from '../header/Navbar'
import Carousel from '../body/carousel'
const Card = lazy(()=> import('../body/card'))

import '../../resources/css/home.css'
import '../../resources/css/mobile.css'
import '../../resources/css/footer.css'


const db = firebase.firestore()



const Home = () => {

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
                                <Suspense fallback={<div>Please wait while Loading....</div>}>
                                <Card
                                key= {index}
                                data ={article}/>
                                </Suspense>
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
                                <Suspense fallback={<div>Please wait while Loading....</div>}>
                                <Card
                                key= {index}
                                data ={article}/>
                                </Suspense>
                            )
                        } ) : ""
                    }
                </div>
                <div className="bordertop"></div>
                <div className="content">
                    <p><i>Categories</i></p>
                </div>
                <div className="catogeriesContent">

                    <p><i>All the things to talk about!</i></p>
                    
                    <div>
                        <div className="row">
                            <div className="column floatLeft"> <i className="fas fa-hamburger"></i>
                                <p>Food and Drinks</p>
                            </div>
                            <div className="column floatRight"><i className="fas fa-dumbbell"></i>
                                <p>Health and Fitness</p>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="column floatLeft"><i className="fas fa-rocket"></i>
                                <p>Science and Technology</p>
                            </div>
                            <div className="column floatRight"><i className="fas fa-chart-bar"></i>
                                <p>Business and Economy</p>
                            </div>
                        
                        </div>
                        <div className="clear"></div>
                    </div>
                    
                    <div>
                        <div className="row">
                            <div className="column floatLeft"><i className="fas fa-place-of-worship"></i>
                                <p>Tours and Travels</p>
                            </div>
                            <div className="column floatRight"><i className="fas fa-dharmachakra"></i>
                                <p>Culture and Heritage</p>
                            </div>
                        </div>
                        
                        <div className="clear"></div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Home