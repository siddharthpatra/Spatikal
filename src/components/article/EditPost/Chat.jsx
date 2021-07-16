import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { firedb } from "../../../config/firebase";

const db = firedb;

const Chat = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let subscribe = true;
    if (subscribe)
      db.collection("suggestion-db")
        .get()
        .then((docs) => {
          if (!docs.empty) {
            let allArticles = [];
            docs.forEach((doc) => {
              const article = {
                id: doc.id,
                ...doc.data(),
              };
              allArticles.push(article);
            });
            setArticles(
              allArticles
                .slice()
                .filter(
                  (a) =>
                    props.currentUser === a.editorUserID ||
                    props.currentUser === a.authorUserID
                )
            );
          }
        });
    return () => (subscribe = false);
  }, []);
  return (
    <div>
      {console.log(articles)}
      {articles.map((a) => (
        <div key={a.id}>{a.suggestedText}</div>
      ))}
      <button onClick={() => props.Reset()}>
        Click here to go back to the main menu
      </button>
    </div>
  );
};
Chat.propTypes = {
  Reset: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
};
export default Chat;
