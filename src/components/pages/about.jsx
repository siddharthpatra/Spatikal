import React from "react";
import "../../resources/css/about.css";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="aboutTitle">
          <br></br>
          <p>ABOUT US</p>
        </div>
        <br></br>

        <div className="aboutContent">
          <p>
            Spatikal is an online platform where we aim to provide vast
            information and insights on various topics. Our primary focus is on
            removing the digital garbage and bringing out a wider essence to the
            topic to which the audience can completely rely on.{" "}
          </p>
          <br></br>
          <p>
            Spatikal is derived from a Sanskrit word 'SPHATIKA’ which means
            ‘crystal’. A crystal is a representation of transparency and
            uniqueness which is what we aim on inculcating in our business
            model. We want to project transparency in the information & content
            we provide and uniqueness in the way we present it.
          </p>
        </div>

        <br></br>
        <div className="aboutTitle">
          <p>MISSION</p>
        </div>
        <br></br>
        <div className="aboutContent">
          <p>
            We aim at becoming a platform where all your research ends on a wide
            range of topics through written, video and audio content.
          </p>
        </div>

        <br></br>

        <div className="aboutTitle">
          <p>VISION</p>
        </div>
        <br></br>
        <div className="aboutContent">
          <p>
            Our vision is to become a successful social informative networking
            platform wherein people can come and voice out their opinions and
            views on various topics and build up a trust with our audience on
            the content they are viewing on our platform.
          </p>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default About;
