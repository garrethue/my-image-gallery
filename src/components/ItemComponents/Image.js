import React, { Fragment, useState } from "react";

export default function Image(props) {
  const [isShown, setIsShown] = useState(true);
  return (
    <div onClick={() => setIsShown(!isShown)} className="img-container">
      {isShown ? (
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
