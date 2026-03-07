import React from "react";

function ProductCard({ product, addToCart, buyNow }) {

  return (
    <div className="card">

      <img src={product.image} alt="" />

      <h4>{product.title}</h4>

      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <button onClick={() => buyNow(product)}>
        Buy Now
      </button>

    </div>
  );
}

export default ProductCard;