import React, { useEffect, useState } from "react";
import "./Productpage.css";
import { useParams } from "react-router-dom";
import { instance } from "../../App";
function Productpage() {
  const { id } = useParams();
  const [product ,setProduct] =useState({})
  // let product = product1.filter((elem) => elem.id === +id);
  useEffect(()=>{
     instance.get(`/products/${id}`)
     .then((res)=>setProduct(res.data))
  },[])


  return (
    <div>
     <h2>{product.title}</h2>
     <img src={product.image}/>
    </div>
  );
}

export default Productpage;
