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
                    <div className="catogeries">
                <p><i>All the things to talk about!</i></p>
                
                
                <div className="row">
                    <div className="column floatLeft"> <i class="fas fa-hamburger"></i></div>
                    <div className="column floatRight"><i class="fas fa-dumbbell"></i></div>
                </div>
                <div className="row">
                    <div className="column floatLeft"> Food and Drinks</div>
                    <div className="column floatRight"> Health and Fitness</div>
                </div>
                <div className="row">
                &nbsp;
                </div>
              
                <br></br>
                <div className="row">
                    <div className="column floatLeft"><i class="fas fa-rocket"></i></div>
                    <div className="column floatRight"><i class="fas fa-chart-bar"></i></div>
                
                </div>
                <div className="row">
                    <div className="column floatLeft"> Science and Technology</div>
                    <div className="column floatRight"> Business and Economy</div>
                </div>
                <div className="row">
                &nbsp;
                </div>
                
                <br></br>
                <div className="row">
                    <div className="column floatLeft"><i class="fas fa-place-of-worship"></i></div>
                    <div className="column floatRight"><i class="fas fa-dharmachakra"></i></div>
                </div>
                
                <div className="row">
                    
                    <div className="column floatLeft">Tours and Travels</div>
                    <div className="column floatRight"> Culture and Heritage</div>
                      
                </div>
               <div className="row">
                &nbsp;
                </div>
                
               
                </div>
            </div>
        </>
    )
}

export default About