import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import axios from "axios";
import Home from "./pages/Home/Home";
import Products from "./pages/products/Products";
import Loyout from "./components/Loyout/Loyut";
import Productpage from "./pages/Productpage/Productpage";
import Carts from "./pages/Carts/Carts";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";

export const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

function App({}) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [users, setUsers] = useState([
    {
      id: Date.now(),
      name: "Ashot",
      login: "admin",
      lastName: "Xazaryan",
      email: "cgitem@email.ru",
      phone: "432525252",
      role: "admin",
      password: "1234",
    },
  ]);
  const storage = useRef(false);
  useEffect(() => {
    if(storage.current){
      localStorage.setItem("cartStore", JSON.stringify(cart));
    }
    storage.current =true
    
  }, [cart]);

  useEffect(() => {
    instance.get("/products").then((res) =>
      setProducts(
        res.data.map((el) => {
          return { ...el, initprice: el.price, count: 1 };
        })
      )
    );
  }, []);

  const addUsers = (values) => {
    console.log(values);

    setUsers((prev) => {
      return [...prev, { ...values, id: Date.now() }];
    });
  };

  const [user, setuser] = useState(null);

  const authUser = (user) => {
    setuser(user);
  };

  let allprice = cart.reduce((accum, elem) => accum + elem.initprice, 0);

  const addtoCard = (element) => {
    let isArray = false;
    cart.forEach((el) => {
      if (el.id === element.id) {
        isArray = true;
        setCart(
          cart.map((elem) => {
            if (elem.id === element.id) {
              return {
                ...elem,
                count: ++elem.count,
                initprice: elem.price * elem.count,
              };
            } else {
              return elem;
            }
          })
        );
      }
    });

    if (!isArray) {
      setCart((prev) => {
        return [...prev, element];
      });
    }
  };

  const btnsClicks = (count, id) => {
    setCart(
      cart.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            count: count,
            initprice: el.price * count,
          };
        } else {
          return el;
        }
      })
    );
  };

  const removeCartItem = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Loyout cart={cart} users={users} user={user} />}
        >
          <Route index element={<Home />} />
          <Route
            path="/products"
            element={<Products produc={products} addtoCard={addtoCard} />}
          />
          <Route
            path="/product/:id"
            element={<Productpage product1={products} />}
          />
          <Route
            path="/carts"
            element={
              <Carts
                cart={cart}
                btnsClicks={btnsClicks}
                removeCartItem={removeCartItem}
                allprice={allprice}
              />
            }
          />
          <Route path="/profile" element={<Profile authUser={authUser} />} />
          <Route path="/login" element={<Login users={users} />} />
          <Route path="/register " element={<Register addUsers={addUsers} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
