import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import s from "./favorite.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavoriteOne } from "../../redux/planets_reducer";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    minWidth: 320,
  },
});

export default function FavoriteCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  let inst = props.data;
  return (
    <NavLink
      to="/FavoriteInfo"
      onClick={() => {
        dispatch(addFavoriteOne(inst.data[0].nasa_id));
      }}
    >
      <Card className={s.card}>
        <CardActionArea>
          <div className={s.imgInner}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={s.img}
              height="140"
              image={inst.links ? inst.links[0].href : ""}
              title="Contemplative Reptile"
            />
          </div>
          <CardContent>
            <Typography
              className={s.title}
              gutterBottom
              //   variant="h5"
              //   component="h2"
            >
              {inst.data[0].title}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button className={s.btn} size="small" color="primary">
          Open and see full info
        </Button>
      </CardActions> */}
      </Card>
    </NavLink>
  );
}
