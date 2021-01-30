import React from 'react'

import '../../resources/css/home.css'
import MountAbu from '../../resources/images/MountAbu.jpeg'
import Fibre from '../../resources/images/fibre.png'
import Matheran from '../../resources/images/matheran.jpg'
import Foodscontainingfibre from '../../resources/images/foods.jpg'
import Banner from '../body/banner'
import Card from '../body/card'
import Navbar from '../header/Navbar'

import '../../resources/css/mobile.css'

const About = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <div className="container">
                <div className="bordertop"></div>
                <div className="content">
                    <p><i>Recent Posts</i></p>
                </div>
                <div className="displayFlex mobileGrid">
                    <Card 
                    title="Mount Abu"
                    imageurl={MountAbu}
                    author="Dimple Nagpal"
                    dateposted="January 20,2021"
                    category="Tour and Travels"
                    body="‘The only hill station in the state of Rajasthan’.

                    What comes to your mind when you hear about Rajasthan? Sand and desert? Right? "/>
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
                    body="Do you consume fibre on a daily basis? A complete balanced diet includes 7 nutrients I.e.,"/>
                </div>
                <div className="bordertop"></div>
                <div className="content">
                    <p><i>Collections</i></p>
                </div>
            </div>
        </>
    )
}

export default About