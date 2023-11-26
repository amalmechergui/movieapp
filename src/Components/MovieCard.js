import React from "react";
import { Card } from "react-bootstrap";
import Rating from "@mui/material/Rating";
const MovieCard = ({ movieInfo }) => {
  return (
    <div className="card">
      <Card style={{ width: "18rem",height:"595px"}}>
        <Card.Img style={{width: "287px", height: "270px"}}variant="top" src={movieInfo.posterURL} />
        <Card.Body>
          <Card.Title> {movieInfo.title} </Card.Title>
          <Card.Text>{movieInfo.description}</Card.Text>
        </Card.Body>
        <Rating name="read-only" readOnly max={10} value={movieInfo.rating} />
      </Card>
      <br />
    </div>
  );
};

export default MovieCard;