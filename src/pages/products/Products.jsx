import "./Products.css";
import Product from "../../components/Product/Product";
import { isButtonElement } from "react-router-dom/dist/dom";
import { useState } from "react";

///chi ashxatum slider@/////
const Products = ({ produc, addtoCard }) => {
  const [p, setP] = useState(produc.slice(0, 5));
  const [classitem,setClassItem]=useState(0)
  const countItem = 5;
  const pageCount = produc.lenght / countItem;
  const arr = [];

  for (let i = 1; i <= pageCount; i++) {
    arr.push(i);
  }

  const paginate = (page) => {
   setClassItem(page)

    if (page === 1) {
      let a = produc.filter((el) => el.id <= 5);
      setP(a)
    }

    if (page === 2) {
      let a = produc.filter((el) => el.id <= 10 && el.id > 5);
      setP(a)
    }

    if (page === 3) {
      let a = produc.filter((el) => el.id <= 15 && el.id > 5);
      setP(a)
    }

    if (page === 4) {
      let a = produc.filter((el) => el.id <= 20 && el.id > 5);
      setP(a)
    }
  };

  return (
    <div>
      <div className="products">
        {p.map((products) => {
          return (
            <Product
              key={products.id}
              product={products}
              addtoCard={addtoCard}
            />
          );
        })}
      </div>
      <div>
        {arr.map((p,index) => (
          <button key={p} onClick={() => paginate(p)} className={p===classitem ? 'a':''}>
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
