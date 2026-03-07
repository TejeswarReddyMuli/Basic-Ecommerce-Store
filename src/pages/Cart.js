import React from "react";

function Cart({ cart, setCart, setPage }) {

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  return (
    <div>

      <h2 style={{padding:"20px"}}>Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cartItem">

          <div>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>
            <p>Qty: {item.qty}</p>
          </div>

          <div>
            <button onClick={() => increaseQty(item.id)}>
              +
            </button>

            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>

        </div>
      ))}

      {cart.length > 0 && (
        <button
          style={{margin:"20px"}}
          onClick={() => setPage("checkout")}
        >
          Checkout
        </button>
      )}

    </div>
  );
}

export default Cart;