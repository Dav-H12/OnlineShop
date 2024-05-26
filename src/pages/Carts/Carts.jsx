import React from "react";
import "./Carts.css";
import Cart from "../../components/cart/Cart";
import Orderform from "../../components/Orderform/OrderForm";
const Carts=({cart,btnsClicks,removeCartItem,allprice})=> {
  return (
    <div className="c" >


      <div className="cartsdiv">
        {cart.lengnt?
        
        cart.map((c) => {
          return <Cart carti={c} key={c.id} btnsClicks={btnsClicks} removeCartItem={removeCartItem}/>;
        })
         :
         <h1>Cart is empty</h1>
      }
      </div>
      <div>
        <Orderform allprice={allprice}/>

      </div>
    </div>
  );
}

export default Carts;
