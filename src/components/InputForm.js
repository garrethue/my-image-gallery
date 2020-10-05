import axios from "axios";
import React, { useState } from "react";

export default function InputForm(props) {
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const onSubmitForm = async (event) => {
    event.preventDefault();
    axios
      .post("/gallery/add-to-gallery", { path, description, title })
      .then(props.getData())
      .catch((err) => console.log(err));
    setDescription("");
    setPath("");
    setTitle("");
  };
  return (
    <div className="form-container">
      <h3 id="form-header" className="text-center mt-1">
        Add to the Gallery:
      </h3>
      <form className="d-flex mb-3" onSubmit={onSubmitForm}>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          placeholder="Give your image a title!"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          id="path"
          className="form-control"
          value={path}
          placeholder="Give the absolute path of the file!"
          onChange={(event) => setPath(event.target.value)}
        />
        <input
          type="text"
          className="form-control"
          id="description"
          value={description}
          placeholder="Give your image a description!"
          onChange={(event) => setDescription(event.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
}
