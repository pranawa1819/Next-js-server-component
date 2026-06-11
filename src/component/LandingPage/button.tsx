"use client";

import { useState } from "react";

interface ButtonProps {
  className?: string;
  buttonName?: string;
  onClick?: () => void;
}
const Button = ({ className, buttonName, onClick}: ButtonProps) => {

  return (
    <div>
      <button onClick={onClick} className={className}>
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
