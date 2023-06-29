import { ReactNode } from "react";

export const Button = ({ className, children, otherProps }: { className?: string, children: ReactNode, otherProps?: any }) => {
  return (
    <button className={`btn ${className}`} {...otherProps}>
      {children}
    </button>
  );
};
