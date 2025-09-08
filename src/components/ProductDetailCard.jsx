import { Link } from "react-router-dom";

const ProductDetailCard = ({ products }) => {
  const { title, image, price, category, description, rating } = products;
  return (
    <div className="products-detail">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>Price: {price}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <p>Rating: {rating.rate}</p>

      <Link to="/characters" className="btn btn-primary">
        Torna a tutti i personaggi
      </Link>
    </div>
  );
};

export default ProductDetailCard;
