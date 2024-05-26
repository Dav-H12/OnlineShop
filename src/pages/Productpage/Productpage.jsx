import React from "react";
import "./Productpage.css";
import { useParams } from "react-router-dom";

function Productpage({ product1 }) {
  const { id } = useParams();
  let product = product1.filter((elem) => elem.id === +id);

  return (
    <div>
      {
      product.map((p) => {
        return (
          <div key={p.id}>
            <h2>{p.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Productpage;
