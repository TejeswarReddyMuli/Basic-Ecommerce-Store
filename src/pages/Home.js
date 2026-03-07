import React, { useState } from "react";
import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

function Home({ addToCart, buyNow }) {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = products.filter((p) => {

    const searchMatch = p.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || p.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <div className="home">

      <Sidebar setCategory={setCategory} />

      <div className="productSection">

        <input
          className="searchBar"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="productGrid">

          {filtered.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              addToCart={addToCart}
              buyNow={buyNow}
            />
          ))}

        </div>
      </div>

    </div>
  );
}

export default Home;