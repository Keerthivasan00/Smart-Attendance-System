import React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      className={`
        px-4 py-3 rounded-lg font-semibold transition-all duration-300 
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default Button;