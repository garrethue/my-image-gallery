import React, { Fragment, useState } from "react";

export default function Image(props) {
  const [isDescriptionShown, setisDescriptionShown] = useState(true);
  return (
    <div
      onClick={() => setisDescriptionShown(!isDescriptionShown)}
      className="img-container"
    >
      {isDescriptionShown ? (
        <img
          src={props.imgObj.path}
          alt={props.imgObj.description}
          className={`image ${props.imgObj.id}`}
        />
      ) : (
        <Fragment>
          <img
            src={props.imgObj.path}
            alt={props.imgObj.description}
            className={`image ${props.imgObj.id}`}
          />
          <div className="overlay">
            <div className="text">{props.imgObj.description}</div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
