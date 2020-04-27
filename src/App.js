import React from "react";
import NavBar from "./components/navBar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import ProductElement from "./components/ProductElement";
import ProductPresentation from "./components/ProductPresentation";

import ICON1 from "./assets/icon1.svg";
import ICON2 from "./assets/icon2.svg";
import ICON3 from "./assets/icon3.svg";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  justifyContent: {
    justifyContent: "center",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <NavBar />
      <Paper
        elevation={0}
        style={{
          paddingTop: "20px",
        }}
      >
        <Grid container justify="center" spacing={0}>
          <ProductPresentation />
        </Grid>
        <Grid
          container
          justify="center"
          spacing={0}
          style={{
            marginTop: "15px",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              textAlign: "center",
              marginBottom: ".4em",
            }}
          >
            <Typography variant="h5">
              <strong>TU</strong> nueva forma de encontrar oportunidades en un
              parpadeo
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardHeader
                  avatar={
                    <img
                      height="50"
                      src={ICON1}
                      alt="Fancy icon"
                      component="img"
                    />
                  }
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1">
                    Recibe 10+ ideas de inversión
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Gran potencial de crecimiento a lo largo del año,
                    especialmente en esta situación de crisis, donde muchas
                    compañias en bolsan crecerán.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardHeader
                  avatar={
                    <img
                      height="50"
                      src={ICON2}
                      alt="Fancy icon"
                      component="img"
                    />
                  }
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1">
                    Transparencia, sin letra pequeña
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Conozca en un vistazo todos los pasos a seguir para invertir
                    en bolsa y el por qué. Gana conocimiento y práctica mientras
                    obtienes ganancias!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardHeader
                  avatar={
                    <img
                      height="50"
                      src={ICON3}
                      alt="Fancy icon"
                      component="img"
                    />
                  }
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1">
                    Solo en un click
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    No pierda tiempo en buscar oportunidades, simplemente siga
                    las intrucciones y aumente su beneficio en un click a largo
                    plazo.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={0}
          style={{
            marginTop: "20px",
          }}
        >
          <ProductElement />
        </Grid>
      </Paper>
    </div>
  );
}

export default App;
