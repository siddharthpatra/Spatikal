import React, { useState } from "react";
import EditPost from "./EditPost";
import Chat from "./Chat";
import PropTypes from "prop-types";
import "../../../resources/css/editPost.css";

const Index = (props) => {
  const [click, setClick] = useState();
  const [open, setOpen] = useState(true);

  return (
    <>
      {open ? (
        <div className="editPost-popup">
          <button className="close_button" onClick={() => setOpen(false)}>
            Close
          </button>
          {click !== null ? (
            click !== true && click !== false ? (
              <div className="chat_container">
                <div onClick={() => setClick(true)}>
                  Click Here to go to the form for editing the post or adding
                  Suggestion
                </div>
                <div onClick={() => setClick(false)}>
                  Click Here to go to Chat or Suggested Posts
                </div>
              </div>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          {click === true ? (
            <EditPost
              Reset={() => setClick()}
              author={props.author}
              currentUser={props.currentUser}
            />
          ) : click === false ? (
            <Chat Reset={() => setClick()} currentUser={props.currentUser} />
          ) : (
            ""
          )}
        </div>
      ) : (
        <button className="open-button" onClick={() => setOpen(true)}>
          Chat
        </button>
      )}
    </>
  );
};
Index.propTypes = {
  author: PropTypes.string.isRequired,
  currentUser: PropTypes.string.isRequired,
};
export default Index;
