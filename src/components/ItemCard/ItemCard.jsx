import { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import "./itemcard.css";

function ItemCard({ props }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [release, setRelease] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setTitle(props.name);
    setImage(props.picture);
    setRelease(props.release);
    setRating(props.rate);
  });

  return (
    <div className="itemcard" key={title}>
      <div className="itemcard-item itemcard-item-image">
        <img src={`https://image.tmdb.org/t/p/w154${image}`} />
      </div>
      <div className="itemcard-item itemcard-item-title">
        <p>{title.replace(/_/g, " ")}</p>
      </div>
      <div className="itemcard-item itemcard-item-release">
        <p>{release}</p>
      </div>
      <div className="itemcard-item itemcard-item-rating">
        <Rating value={rating} max={5} readOnly />
      </div>
    </div>
  );
}

export default ItemCard;
