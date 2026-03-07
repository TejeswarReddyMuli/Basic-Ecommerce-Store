import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";

function App() {

  const [page, setPage] = useState("home");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product) => {

    const exist = cart.find((x) => x.id === product.id);

    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }

    alert("Product added to cart");
    setPage("cart");
  };

  const buyNow = (product) => {

    const newOrder = { ...product, id: Date.now(), qty: 1 };

    setOrders([...orders, newOrder]);

    alert("Product added to Orders");
    setPage("orders");
  };

  return (
    <div>

      <Header setPage={setPage} cart={cart} />

      {page === "home" && (
        <Home addToCart={addToCart} buyNow={buyNow} />
      )}

      {page === "cart" && (
        <Cart cart={cart} setCart={setCart} setPage={setPage} />
      )}

      {page === "orders" && (
        <Orders orders={orders} setOrders={setOrders} />
      )}

      {page === "checkout" && <Checkout />}

    </div>
  );
}

export default App;