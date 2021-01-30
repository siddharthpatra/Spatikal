import React from 'react'

import Main from '../../resources/images/again.png'

const Banner = () => {
    return (
        <>
            <div className="desktopOnly">
                <div className="container displayFlex">
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
            </div>
        </>
    )
}

export default Banner