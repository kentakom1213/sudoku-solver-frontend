import { ReactNode } from "react";
import "./button.css";

const Button = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default Button;
