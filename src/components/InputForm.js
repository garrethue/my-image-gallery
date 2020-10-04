import axios from "axios";
import React, { useState } from "react";

export default function InputForm(props) {
  console.log(props);
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitForm = async (event) => {
    event.preventDefault();
    axios
      .post("/gallery/add-to-gallery", { path, description })
      .then(props.getData())
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <h3 id="form-header" className="text-center mt-1">
        Add to the Gallery:
      </h3>
      <form className="d-flex mb-3" onSubmit={onSubmitForm}>
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
