import React, { useState } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { TbShoppingCartSearch } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Header = ({ cart, users,user }) => {
 const navigate=useNavigate()
//  if(user){
//     return navigate('/profile')
 
//  }else{
//   return navigate('/login')
//  }

  return (
    <header>
      <div>
        <h3>Mobile Shop</h3>
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
      <div>
        <div className="cartimg">
          <NavLink to="/carts">
            <TbShoppingCartSearch />
          </NavLink>
          <NavLink to={user  ? "/profile" : "/login"}>
            <CgProfile />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
