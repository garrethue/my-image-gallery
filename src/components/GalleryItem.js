import React from "react";
import LikeButton from "./buttons/LikeButton";

export default function GalleryItem(props) {
  console.log(props);
  return (
    <div className="item">
      <img src={props.imgObj.path} alt="..." className="img-thumbnail" />
      <LikeButton />
    </div>
  );
}
