import React from "react";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReturnHome from "./ReturnHome";
import About from "./About";

export default function Nav(props) {
  return (
    <Router>
      <Link to="/">
        <IconButton color="secondary">
          <HomeIcon />
        </IconButton>
      </Link>

      <Link to="/about">
        <IconButton color="secondary">
          <AccountCircleIcon />
        </IconButton>
      </Link>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <ReturnHome
            getData={props.getData}
            updateLike={props.updateLike}
            imageItems={props.imageItems}
            deleteItem={props.deleteItem}
          />
        </Route>
      </Switch>
    </Router>
  );
}
