import React from "react";
import "./Input.css";

export const Input = (props) => (
  <div
    className={
      props.theme === "light" ? "input inputLight" : "input inputDark"
    }
  >
    {props.input}
  </div>
);

export default Input;
