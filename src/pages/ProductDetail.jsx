import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((resp) => setProducts(resp.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          Prodotto Dettaglio
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
