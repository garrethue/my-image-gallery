import React, { Fragment } from "react";

export default function GalleryItem(props) {
  return (
    <div className="container">
      <img
        src={props.imgObject.path}
        alt="..."
        className="img-thumbnail img-fluid"
      />
    </div>
  );
}
