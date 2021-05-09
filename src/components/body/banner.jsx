import React from "react";

import Maindesktop from "../../resources/images/Artboard_15.png";
import Mainmobile from "../../resources/images/Artboard.png";
import "../../resources/css/banner.css";

const Banner = () => {
  return (
    <>
      <div className="displayFlex">
        <div className="bannerImage desktopOnly">
          <img src={Maindesktop} alt="Main_Banner" />
        </div>
        <div className="bannerImage mobileOnly">
          <img src={Mainmobile} alt="Main_Banner" />
        </div>

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
