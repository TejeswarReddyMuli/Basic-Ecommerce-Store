import React from "react";

function Header({ setPage, cart }) {
  return (
    <div className="header">

      <div className="logo" onClick={() => setPage("home")}>
        yourCart
      </div>

      <div className="nav">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("cart")}>
          Cart ({cart.length})
        </button>
        <button onClick={() => setPage("orders")}>Orders</button>
      </div>

    </div>
  );
}

export default Header;