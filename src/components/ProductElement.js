import React from "react";
import ChargeCustomer from "./chargeCustomer";
import tradeImg from "../assets/trade-img.jpg";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  justifyContent: {
    justifyContent: "center",
  },
});

export default function ProductElement() {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={4}>
        <Typography variant="h4" style={{ color: green[500] }}>
          ¿Decidido?. Toma acción! <ArrowRightAltIcon color="primary" />
        </Typography>
      </Grid>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Trading image"
            height="140"
            src={tradeImg}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Invierte fácil y seguro
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Ahorra tiempo mientras que inviertes y tus ahorros aumentan, sin
              las dificultades de tener que investigar compañias y gráficas sin
              sentido.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.justifyContent}>
          <ChargeCustomer>
            <Button variant="contained" size="small" color="primary">
              Comprar
            </Button>
          </ChargeCustomer>
        </CardActions>
      </Card>
    </>
  );
}
