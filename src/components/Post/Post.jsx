import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Categorydata from "./Categorydata";
import Checkbox from "./Checkbox";
import { firedb, storage } from "../../config/firebase";
import { isEmpty } from "lodash";

import { useAuth } from "../authentication/context/AuthContext";

const db = firedb;

const storageRef = storage;

const Post = () => {
  const initialState = {
    title: "",
    description: "",
    author: "",
    datePosted: new Date(),
    category: "",
    image: "",
    video: "",
    content: "",
    isPublished: false,
  };

  const [article, setArticle] = useState(initialState);
  const [tempImageLink, setTempImageLink] = useState();
  const [tempVideoLink, setTempVideoLink] = useState();
  const [category, setCategory] = useState([...Categorydata]);
  const [uploaded, setUploaded] = useState(false);

  const { currentUser } = useAuth();

  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "indent",
    "link",
    "image",
    "clean",
  ];

  const onChangeArticleTitle = (value) => {
    setArticle({
      ...article,
      title: value,
    });
  };

  const onChangeArticleDescription = (value) => {
    setArticle({
      ...article,
      description: value,
    });
  };

  const onChangeImageUploaderCallBack = (e) => {
    return new Promise(async (resolve, reject) => {
      const file = e.target.files[0];
      storageRef
        .ref()
        .child("Articles/" + file.name)
        .put(file)
        .then(async (snapshot) => {
          const downloadURL = await storageRef
            .ref()
            .child("Articles/" + file.name)
            .getDownloadURL();
          resolve({
            success: true,
            data: { link: downloadURL },
          });
        });
    });
  };

  const onChangeVideoUploaderCallBack = (e) => {
    return new Promise(async (resolve, reject) => {
      const file = e.target.files[0];
      storageRef
        .ref()
        .child("Articles/" + file.name)
        .put(file)
        .then(async (snapshot) => {
          const downloadURL = await storageRef
            .ref()
            .child("Articles/" + file.name)
            .getDownloadURL();
          resolve({
            success: true,
            data: { link: downloadURL },
          });
        });
    });
  };

  const onChangeAuthor = (value) => {
    setArticle({
      ...article,
      author: value,
    });
  };

  const handleCheckChieldElement = (event) => {
    let categories = [...category];
    categories.forEach((category) => {
      if (category.value === event.target.value)
        category.isChecked = event.target.checked;
    });
    setCategory([...categories]);
  };

  const onChangeArticleContent = (value) => {
    setArticle({
      ...article,
      content: value,
    });
  };

  const clearState = () => {
    console.log("Reached");
    setArticle(initialState);
    setUploaded(true);
    setTempImageLink();
    setTempVideoLink();
    console.log(article);
    console.log(category);
  };

  const submitArticle = (e) => {
    e.preventDefault();
    const articles = {
      ...article,
      video: tempVideoLink ? tempVideoLink : "",
      image: tempImageLink ? tempImageLink : "",
      category: Object.entries(category.filter((a) => a.isChecked === true))
        .map((a) => a[1].value)
        .toString()
        .replace(/,/g, " | "),
      userID: currentUser.uid,
    };
    db.collection("spatikal-db")
      .add(articles)
      .then((res) => {
        res ? clearState() : console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <>
      {uploaded ? <p>The post was successful</p> : ""}
      <form onSubmit={(e) => submitArticle(e)}>
        <div className="titleInput">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placehoder="Here goes your Title"
            onChange={(e) => {
              onChangeArticleTitle(e.target.value);
            }}
            value={article.title}
          />
        </div>
        <div className="descriptionInput">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placehoder="Here goes your Description"
            onChange={(e) => {
              onChangeArticleDescription(e.target.value);
            }}
            value={article.description}
          />
        </div>
        <div className="imageInput">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const uploadImage = await onChangeImageUploaderCallBack(e);
              if (uploadImage.success) {
                setTempImageLink(uploadImage.data.link);
              }
            }}
          />
          {!isEmpty(tempImageLink) ? <img src={tempImageLink} /> : ""}
        </div>
        <div className="videoInput">
          <label htmlFor="video">Video</label>
          <input
            id="video"
            type="file"
            accept="video/*"
            onChange={async (e) => {
              const uploadVideo = await onChangeVideoUploaderCallBack(e);
              if (uploadVideo.success) {
                setTempVideoLink(uploadVideo.data.link);
              }
            }}
          />
          {!isEmpty(tempVideoLink) ? (
            <video controls className="videoContent">
              <source src={tempVideoLink} type="video/mp4" />
            </video>
          ) : (
            ""
          )}
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            onChange={(e) => onChangeAuthor(e.target.value)}
            value={article.author}
          />
        </div>
        <div>
          <div>
            <label>Category</label>
            <ul>
              {category.map((category) => {
                return (
                  <Checkbox
                    handleCheckChieldElement={handleCheckChieldElement}
                    {...category}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <ReactQuill
          value={article.content}
          modules={modules}
          format={formats}
          theme="snow"
          onChange={(e) => onChangeArticleContent(e)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Post;
