import React from 'react'

import firebase from "../../config/firebase"

import '../../resources/css/home.css'
import Banner from '../body/banner'
import Card from '../body/card'

import Navbar from '../header/Navbar'
import Carousel from '../body/carousel'

import '../../resources/css/mobile.css'
import '../../resources/css/footer.css'

import { useState } from 'react'
import { useEffect } from 'react'

const db = firebase.firestore()



const About = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [articles,setArticles] = useState([])
    useEffect(() => {
        getMyArticles()
    },[])
    useEffect(()=>{
        setIsLoaded(true)
    },[articles])
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
                    
                </div>
                <div className="bordertop"></div>
                <div className="content">
                    <p><i>Collections</i></p>
                </div>
                <div className="displayFlex mobileGrid">
                    {
                        isLoaded ? articles.map((article, index) => {
                            return (
                                <Card
                                key= {index}
                                data ={article}/>
                            )
                        } ) : ""
                    }
                    {/* <Card 
                    title="Mount Abu"
                    imageurl={MountAbu}
                    author="Dimple Nagpal"
                    dateposted="January 20,2021"
                    category="Tour and Travels"
                    body="‘The only hill station in the state of Rajasthan’.What comes to your mind when you hear about Rajasthan? Sand and desert? Right? "/>
                    <Card 
                    title="Influence of processing of food on its nutritive value"
                    imageurl={Fibre}
                    author="aditya deshmukh"
                    dateposted="January 19,2021"
                    category="health and fitness|food and drinks"
                    body="We use various methods to process our foodstuff. Processing, in fact includes all those procedures which foods are subjected to,"/>
                    <Card 
                    title="Matheran &#40;Maharashtra&#41;"
                    imageurl={Matheran}
                    author="dimple nagpal"
                    dateposted="January 12,2021"
                    category="Tour and Travels"
                    body="Matheran is a beautiful town in Maharashtra that provides a peaceful holiday for a quick getaway. Here you will get to explore nature"/>
                    <Card 
                    title="Importance of Fibre in your diet"
                    imageurl={Foodscontainingfibre}
                    author="aditya deshmukh"
                    dateposted="January 11,2021"
                    category="food and drinks|health and fitness"
                    body="Do you consume fibre on a daily basis? A complete balanced diet includes 7 nutrients I.e.,"/>*/}
                </div>
                <div className="bordertop"></div>
                    <div className="content">
                        <p><i>Categories</i></p>
                        
                    </div>
                    {/* <p><i>All the things to talk about!</i></p>
                    <br></br>
                    
                    <p>
                    <AiFillAndroid/>Technology&nbsp;&nbsp;&nbsp;&nbsp;<IoFastFoodSharp/>Food & Drinks </p><br></br>
                    <p>                
                    <IoHeart/>Health&nbsp;&nbsp;&nbsp;&nbsp;
                    <VscRocket/>Science
                    </p><br></br>
                    <p>
                    <AiOutlineBarChart/>Business & Economy
                    </p><br></br> */}

            </div>
                

                
        </>
    )
}

export default About