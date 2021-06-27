import React from "react";
import { Helmet } from "react-helmet";
import "../../resources/css/contact.css";

export default function contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Contact Spatikal" />
      </Helmet>
      <div className="container">
        <div className="contactContent">
          <p>
            While you are scrolling for information and knowledge, you can also
            contact us for any enquiry or details at
          </p>
          <br></br>
          <p>
            Mail: <a href="mailto:spatikal2000@gmail.com">spatikal2000@gmail.com</a>
          </p>
        </div>
      </div>
    </>
  );
}
