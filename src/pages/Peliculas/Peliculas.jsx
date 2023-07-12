import ItemCard from "../../components/ItemCard/ItemCard";
import "./peliculas.css";

function Peliculas() {
  const films = [
    {
      name: "The Matrix Resurrections",
      img: "dLIwpCTf4QoW01pp85KP9jcfTpu.jpg",
      reldate: "2021-12-16",
      rate: 4,
    },
    {
      name: "Suspiria",
      img: "6wkPtxXs8OgswEQSx0cgpMNSqiy.jpg",
      reldate: "2018-10-11",
      rate: 2,
    },
    {
      name: "The SpongeBob SquarePants Movie",
      img: "j4Sqs3SKNaJ4chdKXS1qqUlaWyW.jpg",
      reldate: "2004-11-14",
      rate: 5,
    },
    {
      name: "[REC]",
      img: "vIoBgFBJuqcIzudkFyagJuCxHZ7.jpg",
      reldate: "2007-11-23",
      rate: 0,
    },
  ];

  return (
    <div className="category-pasarella">
      <div className="category-title">
        <p>Lanzamientos recientes</p>
      </div>
      <div className="films-card">
        {films.map((item) => (
          <ItemCard props={item} key={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Peliculas;
