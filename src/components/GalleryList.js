import React from "react";
import GalleryItem from "./GalleryItem";

export default function GalleryList(props) {
  return (
    <div className="container">
      <div className="image-gallery">
        {props.imageItems.map((imgObj) => (
          <GalleryItem
            updateLike={props.updateLike}
            key={imgObj.id}
            imgObj={imgObj}
          />
        ))}
      </div>
    </div>
  );
}
