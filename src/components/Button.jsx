import React from "react";

const Button = ({ className, btnText, btnFunc }) => {
  return (
    <button onClick={btnFunc} className={`${className}`}>
      {btnText}
    </button>
  );
};

export default Button;
