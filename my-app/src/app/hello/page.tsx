import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

import Nav from "../component/Nav2";

export default function MultiActionAreaCard() {
  return (
    <div>
      <Nav />

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href="">
          <AirplanemodeActiveIcon />
          dasd
          <CardMedia
            component="img"
            height="140"
            image="data:image/jpeg;base64,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"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
