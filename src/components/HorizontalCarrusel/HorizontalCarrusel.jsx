import ItemCard from "../../components/ItemCard/ItemCard";
import "./horizontalcarrusel.css";

function HorizontalCarrusel({ title, list }) {
  return (
    <div className="category-carrusel">
      <div className="category-title">
        <p>{title}</p>
      </div>
      <div className="items-card">
        {list.map((item) => (
          <ItemCard props={item} key={item.name} />
        ))}
      </div>
    </div>
  );
}

export default HorizontalCarrusel;
