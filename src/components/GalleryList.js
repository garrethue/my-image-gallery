import React from "react";
import GalleryItem from "./GalleryItem";

export default function GalleryList(props) {
  console.log(props.imageItems.map((imgObj) => "HelloWorld!"));
  return (
    <div id="container">
      {props.imageItems.map((imgObj) => (
        <GalleryItem imgObj={imgObj} />
      ))}
    </div>
  );
}
