import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/slice/index";
export const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({ name: "ibrahim", age: 25, email: "imd25775@gmail.com" })
          )
        }
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
};
