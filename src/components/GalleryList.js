import React from "react";
import GalleryItem from "./GalleryItem";

export default function GalleryList(props) {
  console.log(props);
  return (
    <div className="container">
      {props.imageItems.map((imgObject) => {
        return <GalleryItem key={imgObject.id} imgObject={imgObject} />;
      })}
    </div>
  );
}
