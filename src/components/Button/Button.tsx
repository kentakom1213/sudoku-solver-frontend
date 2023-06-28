import { ReactNode } from "react";

export const Button = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <button className={`btn ${className}`}>
      {children}
    </button>
  );
};
