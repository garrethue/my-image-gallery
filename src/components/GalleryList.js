import React, { Fragment } from "react";
import ImageCard from "./ImageCard.js";

export default function GalleryList(props) {
  return (
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
