import React from "react";
import LikeButton from "./ItemComponents/LikeButton";
import Image from "./ItemComponents/Image";
import ExpandButton from "./ItemComponents/ExpandButton";
import DeleteButton from "./ItemComponents/DeleteButton";

export default function GalleryItem(props) {
  return (
    <div className="item">
      <Image imgObj={props.imgObj} />
      <div className="expand-likes-container">
        <DeleteButton deleteItem={props.deleteItem} imgObj={props.imgObj} />{" "}
        <ExpandButton imgObj={props.imgObj} />{" "}
        <LikeButton updateLike={props.updateLike} imgObj={props.imgObj} />
      </div>
    </div>
  );
}
