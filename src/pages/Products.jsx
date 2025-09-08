import axios from "axios";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setProducts(resp.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row gy-3">
          <div className="col-12">
            <h1 className="text-center">Prodotti</h1>
          </div>
          {products.map((product) => {
            return (
              <div className="col-4" key={product.id}>
                <div className="card">
                  <div className="card-header">{product.title}</div>
                  <div className="card-body">
                    <p>{product.category}</p>
                    <p>
                      <em>{product.price}</em>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
