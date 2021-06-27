import React from "react";

const EditPost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
            placeholder="Please copy and paste the part you want to edit in the article"
          />
        </div>
        <div>
          <label htmlFor="suggestedReference">Enter from where you got the reference</label>
          <textarea
            id="suggestedReference"
            required
            type="password"
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
