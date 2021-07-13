import React, { useState } from "react";
import EditPost from "./EditPost";
import Chat from "./Chat";
import PropTypes from "prop-types";

const Index = (props) => {
  const [click, setClick] = useState();
  const handleReset = (val) => {
    val ? setClick() : "";
  };
  return (
    <>
      {click !== null ? (
        click !== true && click !== false ? (
          <>
            <div onClick={() => setClick(true)}>
              Click Here to go to the form for editing the post or adding
              Suggestion
            </div>
            <div onClick={() => setClick(false)}>
              Click Here to go to Chat or Suggested Posts
            </div>
          </>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {click === true ? (
        <EditPost
          Reset={handleReset}
          author={props.author}
          currentUser={props.currentUser}
        />
      ) : click === false ? (
        <Chat Reset={handleReset} />
      ) : (
        ""
      )}
    </>
  );
};
Index.propTypes = {
  author: PropTypes.string.isRequired,
  currentUser: PropTypes.string.isRequired,
};
export default Index;
