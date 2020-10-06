import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DeleteButton from "./Buttons/DeleteButton";
import LikeButton from "./Buttons/LikeButton";
import ExpandButton from "./Buttons/ExpandButton";

//Stylize each card
const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 240,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <a href={props.imgObj.path} className="img-1">
          <CardMedia
            className={classes.media}
            image={props.imgObj.path}
            title={props.imgObj.description}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.imgObj.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.imgObj.description}
              <br />
              <span className="number-of-likes">
                Likes: {props.imgObj.likes}
              </span>
            </Typography>
          </CardContent>
        </a>
      </CardActionArea>
      <CardActions>
        <DeleteButton imgObj={props.imgObj} deleteItem={props.deleteItem} />
        <LikeButton imgObj={props.imgObj} updateLike={props.updateLike} />
        <ExpandButton imgObj={props.imgObj} />
      </CardActions>
    </Card>
  );
}
