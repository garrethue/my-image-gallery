import React from "react";
import GalleryItem from "./GalleryItem";

export default function GalleryList(props) {
  return (
    <div className="wrapper">
      {props.imageItems.map((imgObj) => (
        <GalleryItem
          updateLike={props.updateLike}
          deleteItem={props.deleteItem}
          key={imgObj.id}
          imgObj={imgObj}
        />
      ))}
    </div>
  );
}
