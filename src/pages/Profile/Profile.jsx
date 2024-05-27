import React, { useEffect } from "react";
import "./Profile.css";
import { useLocation } from "react-router-dom";

const Profile = (authUser) => {
  const { state } = useLocation;
useEffect=(()=>{
    authUser(state)
},[])


  return (
    <div>
      <h1>Profile:{state?.name}</h1>
    </div>
  );
};

export default Profile;
