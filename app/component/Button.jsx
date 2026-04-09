import { Children } from "react";

export const Button = ({ children, disabled, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-[10px] px-[12px] flex items-center gap-1 justify-center cursor-pointer rounded-[6px] bg-[#121316] ${className}`}
    >
      {children}
    </button>
  );
};
