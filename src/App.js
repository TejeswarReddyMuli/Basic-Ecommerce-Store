import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {

    const data = [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Phone", price: 20000 },
      { id: 3, name: "Headphones", price: 3000 },
      { id: 4, name: "Watch", price: 5000 }
    ];

    setProducts(data);

  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index,1);
    setCart(updated);
  };

  return (

    <Router>

      <h1>Mini Amazon</h1>

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      <Routes>

        <Route 
          path="/" 
          element={
            <Home 
              products={products} 
              addToCart={addToCart}
            />
          } 
        />

        <Route 
          path="/cart" 
          element={
            <CartPage 
              cart={cart} 
              removeFromCart={removeFromCart}
            />
          } 
        />

      </Routes>

    </Router>
  );
}

export default App;