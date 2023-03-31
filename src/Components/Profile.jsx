import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  }

  return (
    <div>
      <h1>Profile</h1>
      <h2> {auth.user} </h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
