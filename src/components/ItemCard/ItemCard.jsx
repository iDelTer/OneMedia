import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { rateMovie } from "../../services/movies";
import "./itemcard.css";

function ItemCard({ props }) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [release, setRelease] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    console.log(props);
    setId(props.id);
    setTitle(props.name);
    setImage(props.picture);
    setRelease(props.release);
    setRating(props.rate);
  });

  const updateRate = async (identifier, newValue) => {
    let bodyData = {
      movie_id: identifier,
      score: newValue,
    };
    bodyData = JSON.stringify(bodyData);
    const data = await rateMovie(bodyData);
    alert("Película votada");
    console.log(JSON.stringify(data));
    location.reload();
  };

  return (
    <div className="itemcard" key={id}>
      <div className="itemcard-item itemcard-item-image">
        <Link to={"/movie/" + id}>
          <img src={`https://image.tmdb.org/t/p/w154${image}`} />
        </Link>
      </div>
      <div className="itemcard-item itemcard-item-title">
        <Link to={"/movie/" + id}>
          <p>{title.replace(/_/g, " ")}</p>
        </Link>
      </div>
      <div className="itemcard-item itemcard-item-release">
        <p>{release}</p>
      </div>
      <div className="itemcard-item itemcard-item-rating">
        {/* <Rating value={rating} max={5} readOnly /> */}
        <Rating
          value={rating}
          max={5}
          onChange={(event, newValue) => {
            setRating(newValue);
            updateRate(id, newValue);
          }}
        />
      </div>
    </div>
  );
}

export default ItemCard;
