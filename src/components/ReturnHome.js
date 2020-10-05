import React, { Fragment } from "react";

import GalleryList from "./GalleryList";
import InputForm from "./InputForm";

export default function ReturnHome(props) {
  return (
    <Fragment>
      <header className="App-header">
        <h1 className="App-title">Gallery of my life</h1>
      </header>
      <hr />
      <InputForm getData={props.getData} />
      <GalleryList
        updateLike={props.updateLike}
        imageItems={props.imageItems}
        deleteItem={props.deleteItem}
      />
    </Fragment>
  );
}
