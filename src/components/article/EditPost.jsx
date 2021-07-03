import { useRef } from "react";
import { firedb } from "../../config/firebase";

const db = firedb;

const EditPost = () => {
  const suggestionTextRef = useRef();
  const suggestedTextRef = useRef();
  const suggestedReferenceRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const suggestion = {
      suggestionText: suggestionTextRef.current.value,
      suggestedText: suggestedTextRef.current.value,
      suggestedReference: suggestedReferenceRef.current.value,
    };
    db.collection("suggestion-db")
      .doc()
      .set(suggestion)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    e.target.reset();
  };
  return (
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
          <label htmlFor="suggestedText">Enter the part you want to edit</label>
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
    </div>
  );
};

export default EditPost;
