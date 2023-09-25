import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./ActionAreaCard.css";

export default function ProjectCard(props) {
  return (
    <Card className="superadmintask-card">
      <CardActionArea className="superadmintask-card1">
        <CardContent className="superadmintask-card2">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="superadmintask-count"
          >
            {props.count}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="superadmintask-status"
          >
            {props.status}
          </Typography>
        </CardContent>
        <div
          className="superadmintask-line"
          style={{
            backgroundColor: `${props.color}`,
          }}
        ></div>
      </CardActionArea>
    </Card>
  );
}
