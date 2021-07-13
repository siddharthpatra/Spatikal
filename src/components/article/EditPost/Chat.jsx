import React from "react";
import PropTypes from "prop-types";

const Chat = (props) => {
  return (
    <div>
      <button onClick={() => props.Reset(true)}>
        Click here to go back to the main menu
      </button>
    </div>
  );
};
Chat.propTypes = {
  Reset: PropTypes.func.isRequired,
};
export default Chat;
