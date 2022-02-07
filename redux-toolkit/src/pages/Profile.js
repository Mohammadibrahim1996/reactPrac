import React from "react";
import { useSelector } from "react-redux";

export const Profile = () => {
  const user = useSelector((state) => state.user.value);
  console.log(user);
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <div style={{ color: themeColor }}>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
    </div>
  );
};
