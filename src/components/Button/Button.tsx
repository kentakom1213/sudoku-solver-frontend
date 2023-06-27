import { ReactNode } from "react";

const Button = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default Button;
