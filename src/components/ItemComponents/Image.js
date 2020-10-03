import React from "react";

export default function Image(props) {
  return (
    <div className="img-container">
      <img src={props.imgObj.path} alt="..." className="img-thumbnail image" />
      <div className="overlay">
        <div className="img-text">{props.imgObj.description}</div>
      </div>
    </div>
  );
}
