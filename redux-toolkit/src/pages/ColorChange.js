import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../redux/slice/theme";

export const ColorChange = () => {
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button onClick={() => dispatch(changeColor(color))}>Chnage Color</button>
    </div>
  );
};
