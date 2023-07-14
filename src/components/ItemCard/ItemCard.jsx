import { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import RateStarActive from "../RateStarActive";
import "./itemcard.css";

/**Preguntar a GPT:
 * Como empiezo una API
 * Tengo las siguientes rutas
 */

function ItemCard({ props }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [release, setRelease] = useState("");
  const [rating, setRating] = useState(0);
  let starLength = Array(5).fill(1);

  useEffect(() => {
    setTitle(props.name);
    setImage(props.img);
    setRelease(props.reldate);
    setRating(props.rate);
  });

  return (
    <div className="itemcard">
      <div className="itemcard-item itemcard-item-image">
        <img src={`https://image.tmdb.org/t/p/w154/${image}`} />
      </div>
      <div className="itemcard-item itemcard-item-title">
        <p>{title}</p>
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
