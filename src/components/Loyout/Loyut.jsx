import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Loyout = ({cart ,users,user}) => {
  return (
    <div>
      <Header cart={cart} users={users} user={user}/>
      <Outlet />
    </div>
  );
};

export default Loyout;
