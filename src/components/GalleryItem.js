import React from "react";
import LikeButton from "./ItemComponents/LikeButton";
import Image from "./ItemComponents/Image";

export default function GalleryItem(props) {
  return (
    <div className="item">
      <Image imgObj={props.imgObj} />
      <LikeButton />
    </div>
  );
}
