import React from "react";

import Main from "../../resources/images/again.png";
import "../../resources/css/banner.css";

const Banner = () => {
  return (
    <>
      <div className="container displayFlex">
        <img src={Main} alt="Main_Banner" />

        {/*
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
                        */}
      </div>

      <div className="clear"></div>
    </>
  );
};

export default Banner;
