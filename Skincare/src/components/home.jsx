
import data from '../data/db.json';
import ProductCard from "./products"


import { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
    }
  }, []);

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="row">
        {Array.isArray(products) ? (
          products.map((p) => (
            <div key={p.id} className="col-md-4">
              <div className="card p-3 mb-3 shadow">
                <h5>{p.name}</h5>
                <p>{p.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No product data</p>
        )}
      </div>
    </div>
  );
};

export default Home;

