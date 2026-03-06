import React from "react";

function Cart({ cart, removeFromCart }) {

  return (

    <div>

      {cart.length === 0 && <p>Cart Empty</p>}

      {cart.map((item,index)=>(
        <div key={index}>

          {item.name} - ₹{item.price}

          <button onClick={()=>removeFromCart(index)}>
            Remove
          </button>

        </div>
      ))}

    </div>

  );
}

export default Cart;