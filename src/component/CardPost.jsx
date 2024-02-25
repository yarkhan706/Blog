import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

const CardPost = ({ title, content, ...props }) => {
  return (
    <Card style={{ display: "flex", flexDirection: "column" , width: 300 }}>
      <CardMedia style={{ height: 140 , width : "100%"}} image="https://source.unsplash.com/random" alt="random" />

      <CardContent>
        <h3 style={{ fontSize: 18, fontWeight: "bold", margin: "10px 0" }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, color: "rgba(0, 0, 0, 0.54)" }}>{content.substr(0,40)}</p>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardPost;
