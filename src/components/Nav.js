import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  root: {
    width: 500,
    background: "black",
  },
  custom: {
    color: "white",
  },
});

export default function Nav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.custom}
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        className={classes.custom}
        label="About"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}
