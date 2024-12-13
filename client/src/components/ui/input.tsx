import React from "react";
import cn from "../../lib/cn.ts";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <input
      className={cn(
        "w-full px-3 py-2 h-10 placeholder:text-stone-600 placeholder:font-normal bg-background border border-stone-600 font-semibold focus:outline-none focus:border-stone-200",
        className,
      )}
      {...props}
    />
  );
};

export default Input;
