import React from "react";
import ProductList from "../components/ProductList";

function Home({ products, addToCart }) {

  return (
    <div>
      <h2>Products</h2>

      <ProductList 
        products={products} 
        addToCart={addToCart} 
      />
    </div>
  );
}

export default Home;