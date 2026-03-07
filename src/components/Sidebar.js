import React from "react";

function Sidebar({ setCategory }) {

  const categories = [
    "All",
    "Electronics",
    "Mobiles",
    "Laptops",
    "Fashion",
    "Accessories"
  ];

  return (
    <div className="sidebar">

      <h3>Categories</h3>

      {categories.map((c) => (
        <p key={c} onClick={() => setCategory(c)}>
          {c}
        </p>
      ))}

    </div>
  );
}

export default Sidebar;