import { NavLink } from "react-router-dom";
import "./Product.css";
import React, { useState } from "react";

const Product = ({ product, addtoCard }) => {
  const [textlenght, settextlenght] = useState(20);
  

  const handletoCart = (item) => {
     addtoCard(item)
    
    }
 

  return (
    <div className="prod">
      <NavLink to={`/product/${product.id}`}>
        <img src={product.image} className="nkar" />
      </NavLink>
      <h3>
        {product.title.length > textlenght
          ? `${product.title.slice(0, textlenght)}...`
          : product.title}
      </h3>
      <button  onClick={() => handletoCart(product)} className="addtoCardBtn">
        Add to card 
         
      </button>
    </div>
  );
}

export default Product;
