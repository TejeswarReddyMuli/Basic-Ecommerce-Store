import React from "react";

function Orders({ orders, setOrders }) {

  const cancelOrder = (id) => {

    const updated = orders.filter((o) => o.id !== id);

    setOrders(updated);
  };

  return (
    <div>

      <h2 style={{padding:"20px"}}>Orders</h2>

      {orders.map((item) => (
        <div key={item.id} className="orderCard">

          <img src={item.image} alt="" />

          <div>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>

            <button onClick={() => cancelOrder(item.id)}>
              Cancel Order
            </button>
          </div>

        </div>
      ))}

    </div>
  );
}

export default Orders;