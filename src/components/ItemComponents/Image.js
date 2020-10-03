import React, { Fragment, useState } from "react";

export default function Image(props) {
  const [isDescriptionShown, setisDescriptionShown] = useState(true);
  return (
    <div
      onClick={() => setisDescriptionShown(!isDescriptionShown)}
      className="img-container"
    >
      {isDescriptionShown ? (
        <img src={props.imgObj.path} alt="..." className="image" />
      ) : (
        <Fragment>
          <img src={props.imgObj.path} alt="..." className="image" />
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
