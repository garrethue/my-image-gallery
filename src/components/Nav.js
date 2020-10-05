import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    <Fragment>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        {/* <BottomNavigationAction
          className={classes.custom}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          className={classes.custom}
          label="About"
          icon={<AccountCircleIcon />}
        /> */}

        <Router>
          <Link to="/">
            <BottomNavigationAction
              className={classes.custom}
              label="Home"
              icon={<HomeIcon />}
            />
          </Link>
          <Link to="/about">
            <BottomNavigationAction
              className={classes.custom}
              label="About"
              icon={<AccountCircleIcon />}
            />
          </Link>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">world</Route>
            <Route path="/">hello</Route>
          </Switch>
        </Router>
      </BottomNavigation>
    </Fragment>
  );
}
