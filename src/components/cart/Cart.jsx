import React, { useState } from "react";
import "./Cart.css";

function Cart({ carti, btnsClicks, removeCartItem }) {
  let [cartCount, setCartCount] = useState(carti.count);

  const minus = () => {
    if (cartCount > 1) {
      setCartCount(--cartCount );
      btnsClicks(cartCount,carti.id)
    }
    btnsClicks(cartCount);
  };
  const plus = () => {
    setCartCount(++cartCount );
    btnsClicks(cartCount,carti.id);
  };
  

  return (
    <>
      <div className="cart">
        <div>
          <h3>{carti.title}</h3>
          <img src={carti.image} className="cartimage"/>
          
        </div>
        <div className="right">
          <span>
            count : <b>{carti.count}</b>
          </span>
          <button onClick={minus}>-</button>
          <span>{carti.initprice}</span>
          <button onClick={plus}>+</button>
        </div>
        <button onClick={() => removeCartItem(carti.id)}>X</button>
      </div>
    </>
  );
}

export default Cart;
