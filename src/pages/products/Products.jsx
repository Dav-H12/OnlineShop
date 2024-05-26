import "./Products.css";
import Product from "../../components/Product/Product";



///chi ashxatum slider@/////
const Products = ({ produc,addtoCard}) => {
  return (
    <div>
      <div className="products">
        
        {
          produc.map((produ) => {
          return <Product key={produ.id} product={produ} addtoCard={addtoCard}  />;
        })
        }
      </div>




    </div>
  );
};

export default Products;
