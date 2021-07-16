import React, { useRef, useState } from "react";
import { firedb } from "../../../config/firebase";
import PropTypes from "prop-types";

const db = firedb;

const EditPost = (props) => {
  const [submit, setSubmit] = useState(false);
  const suggestionTextRef = useRef();
  const suggestedTextRef = useRef();
  const suggestedReferenceRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const suggestion = {
      suggestionText: suggestionTextRef.current.value,
      suggestedText: suggestedTextRef.current.value,
      suggestedReference: suggestedReferenceRef.current.value,
      authorUserID: props.author,
      editorUserID: props.currentUser,
    };
    db.collection("suggestion-db")
      .doc()
      .set(suggestion)
      .then((res) => {
        console.log(res);
        setSubmit(true);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  };
  return (
    <>
      {submit ? (
        <>
          <div>Thanks for submiting. Your suggestion has been captured.</div>
          <button onClick={() => setSubmit(false)}>
            Click here to submit another response
          </button>
          <button onClick={() => props.Reset()}>
            Click here to go back to the main menu
          </button>
        </>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="suggestionText">
                Enter the part you want to edit
              </label>
              <textarea
                id="suggestionText"
                ref={suggestionTextRef}
                required
                type="password"
                placeholder="Please copy and paste the part you want to edit in the article"
              />
            </div>
            <div>
              <label htmlFor="suggestedText">
                Enter the part you want to edit
              </label>
              <textarea
                id="suggestedText"
                required
                type="password"
                ref={suggestedTextRef}
                placeholder="Please copy and paste the part you want to edit in the article"
              />
            </div>
            <div>
              <label htmlFor="suggestedReference">
                Enter from where you got the reference
              </label>
              <textarea
                id="suggestedReference"
                required
                type="password"
                ref={suggestedReferenceRef}
                placeholder="Please enter the references for the suggested part"
              />
            </div>
            <button id="suggestionSubmit" type="submit">
              Submit
            </button>
          </form>
          <button onClick={() => props.Reset()}>
            Click here to go back to the main menu
          </button>
        </div>
      )}
    </>
  );
};

EditPost.propTypes = {
  author: PropTypes.string.isRequired,
  currentUser: PropTypes.string.isRequired,
  Reset: PropTypes.func.isRequired,
};

export default EditPost;
