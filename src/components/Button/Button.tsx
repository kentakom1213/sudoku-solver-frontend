import { ReactNode } from "react";
import "./button.css";

export const Button = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <button className={className}>
      {children}
    </button>
  );
};
