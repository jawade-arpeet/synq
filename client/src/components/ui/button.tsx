import * as React from "react";
import cn from "../../lib/cn";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 inline-block bg-secondary text-primary font-semibold text-sm",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
