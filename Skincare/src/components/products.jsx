import React from "react";

const ProductCard = ({ product }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100 text-center shadow-sm">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-success fw-bold">{product.price}</p>
        <button className="btn btn-outline-primary">Buy Now</button>
      </div>
    </div>
  </div>
);

export default ProductCard;
