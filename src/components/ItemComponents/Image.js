import React, { Fragment, useState } from "react";

export default function Image(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="img-container">
      <img
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        src={props.imgObj.path}
        alt="..."
        className="img-thumbnail image"
      />
      <div class="overlay">
        <div class="img-text">{props.imgObj.description}</div>
      </div>
    </div>
  );
}
