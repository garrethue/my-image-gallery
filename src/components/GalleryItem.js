import React, { Fragment } from "react";
import LikeButton from "./ItemComponents/LikeButton";
import Image from "./ItemComponents/Image";
import ExpandButton from "./ItemComponents/ExpandButton";

export default function GalleryItem(props) {
  return (
    <div className="item">
      <div className="item-child">
        <Image imgObj={props.imgObj} />
        <ExpandButton imgObj={props.imgObj} />
        <LikeButton updateLike={props.updateLike} imgObj={props.imgObj} />
      </div>
    </div>
  );
}
