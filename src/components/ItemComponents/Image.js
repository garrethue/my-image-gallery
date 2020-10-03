import React, { Fragment } from "react";

export default function Image(props) {
  return (
    <Fragment>
      <img src={props.imgObj.path} alt="..." className="image" />
    </Fragment>
  );
}
