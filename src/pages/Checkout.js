import React from "react";

function Checkout(){

const buy=()=>{

alert("Please login or signup to place order")

}

return(

<div style={{padding:"30px"}}>

<h2>Checkout</h2>

<input placeholder="Enter Address" style={{display:"block",margin:"10px 0",padding:"10px"}}/>

<input placeholder="Card Number" style={{display:"block",margin:"10px 0",padding:"10px"}}/>

<button onClick={buy}>
Place Order
</button>

</div>

)

}

export default Checkout