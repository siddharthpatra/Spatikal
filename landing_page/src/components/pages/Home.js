import React from 'react'

import '../../resources/css/home.css'
import MountAbu from '../../resources/images/MountAbu.jpeg'
import Fibre from '../../resources/images/fibre.png'
import Matheran from '../../resources/images/matheran.jpg'
import Banner from '../body/banner'
import Card from '../body/card'
import Navbar from '../header/Navbar'

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
                <div className="displayFlex">
                    <Card 
                    title="Mount Abu"
                    imageurl={MountAbu}
                    author="sipun"
                    dateposted="January 20,2021"
                    category="Tour and Travels"
                    body="'The only hill station in the state of Rajasthan’"/>
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
                    title="Mount Abu"
                    imageurl={MountAbu}
                    author="sipun"
                    dateposted="January 20,2021"
                    category="Tour and Travels"
                    body="'The only hill station in the state of Rajasthan’"/>
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