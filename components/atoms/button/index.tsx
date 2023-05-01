import React from "react";
import { ButtonProps } from "./_button.interface";

const Button = (props: ButtonProps) => {
  return (
    <button
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-lime-600 hover:text-lime-500"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
