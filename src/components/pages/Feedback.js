import React from "react";

import { firedb } from "../../config/firebase";

const db = firedb;

const Feedback = () => {
  db.collection("spatikal-Feedbackdb")
    .add(feedback)
    .then((res) => {
      clearState();
    });
  return (
    <>
      <div>
        <input type="email" />
      </div>
    </>
  );
};

export default Feedback;
0;
