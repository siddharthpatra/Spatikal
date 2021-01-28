import React from 'react'

import '../../resources/css/home.css'
import Main from '../../resources/images/again.png'

import Navbar from '../Navbar'

const About = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="column first">
                        <img src={Main} alt="Main_Banner"/>
                    </div>
                    <div className="column second">
                        <div className="row">
                            <div className="column floatLeft">
                                <img src={Main} alt="Main_Banner"/>
                            </div>
                            <div className="column floatRight">
                                <img src={Main} alt="Main_Banner"/>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <div className="row end">
                        <img src={Main} alt="Main_Banner"/>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
            <div className="container">
                <div className="bordertop"></div>
                <div className="content">
                    <p><i>Recent Posts</i></p>
                </div>
            </div>
        </>
    )
}

export default About