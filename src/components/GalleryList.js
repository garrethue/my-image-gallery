import React from "react";
import GalleryItem from "./GalleryItem";

export default function GalleryList(props) {
  return (
    <div id="container">
      {props.imageItems.map((imgObj) => (
        <GalleryItem key={imgObj.id} imgObj={imgObj} />
      ))}
    </div>
  );
}
