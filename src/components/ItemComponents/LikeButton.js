import React, { Fragment, useState } from "react";

export default function LikeButton() {
  //use isShown to create hover effect for this button
  const [isShown, setIsShown] = useState(false);
  return (
    <Fragment>
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className={isShown ? "btn btn-danger" : "btn btn-outline-danger"}
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-heart-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </button>{" "}
      Number of Likes: TODO GARRET
    </Fragment>
  );
}
