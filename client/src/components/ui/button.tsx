import React from "react";

import cn from "../../lib/cn.ts";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-block px-4 py-2 h-10 bg-stone-50 text-stone-950 font-bold text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
