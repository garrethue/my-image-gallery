import React, { Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

export default function DeleteButton(props) {
  return (
    <Fragment>
      <IconButton
        onClick={() => props.deleteItem(props.imgObj.id)}
        color="secondary"
        aria-label="delete item"
        id="delete-button"
      >
        <DeleteOutlinedIcon />
      </IconButton>
    </Fragment>
  );
}
