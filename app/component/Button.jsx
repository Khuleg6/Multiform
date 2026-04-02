import { Children } from "react";

export const Button = ({ children, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full py-[10px] px-[12px] flex items-center gap-1 justify-center cursor-pointer rounded-[6px] text-white bg-[#121316]"
    >
      {children}
    </button>
  );
};
