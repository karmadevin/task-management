import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./ActionAreaCard.css";

export default function ProjectCard(props) {
  return (
    <Card className="superadminproject-card">
      <CardActionArea className="superadminproject-card1">
        <CardContent className="superadminproject-card2">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="superadminproject-count"
          >
            {props.count}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="superadminproject-status"
          >
            {props.status}
          </Typography>
        </CardContent>
        <div
          className="superadminproject-line"
          style={{
            backgroundColor: `${props.color}`,
          }}
        ></div>
      </CardActionArea>
    </Card>
  );
}
