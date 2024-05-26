import React from "react";
import "./Profile.css";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const { state } = useLocation;

  return (
    <div>
      <h1>Profile:{state.name}</h1>
    </div>
  );
};

export default Profile;
