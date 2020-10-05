import React, { Fragment } from "react";
import ImageCard from "./ImageCard.js";

export default function GalleryList(props) {
  return (
    //wrapper for CSS Grid
    //iterate over object in array and render it
    <div className="wrapper">
      {props.imageItems.map((imgObj) => {
        return (
          <Fragment>
            <ImageCard
              updateLike={props.updateLike}
              deleteItem={props.deleteItem}
              key={imgObj.id}
              imgObj={imgObj}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
