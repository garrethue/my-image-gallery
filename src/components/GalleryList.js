import React, { Fragment } from "react";
import GalleryItem from "./GalleryItem";
import ImageCard from "./ImageCard.js";

export default function GalleryList(props) {
  return (
    <div className="wrapper">
      {props.imageItems.map((imgObj) => {
        return (
          <Fragment>
            {/* <GalleryItem
              updateLike={props.updateLike}
              deleteItem={props.deleteItem}
              key={imgObj.id}
              imgObj={imgObj}
            /> */}
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
