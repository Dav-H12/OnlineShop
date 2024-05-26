import React, { useState } from "react";
import "./Cart.css";

function Cart({ carti,btnsClicks ,removeCartItem}) {
  const [cartCount,setCartCount]=useState(carti.count)

  const minus =()=>{
  if(cartCount>1){

    setCartCount(cartCount -1)
  }
  btnsClicks(cartCount)

  }
  const plus =()=>{
   setCartCount(cartCount+1)
   btnsClicks(cartCount)

  }
 const removeItem =(id)=>{



 }



  return (
    <>
    <div className="cart">
    <div>
      <img src={carti.image} />
      <h3>{carti.title}</h3>
     
    </div>
    <div className="right">
    <span>count : <b>{carti.count}</b></span>
    <button onClick={minus}>-</button>
    <span>{carti.initprice}</span>
    <button onClick={plus}>+</button>
    </div>
    <button onClick={()=>removeCartItem(cart.id)}>X</button>
    </div>
  </>
  );
}

export default Cart;
