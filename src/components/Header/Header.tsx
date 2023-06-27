import { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Header;
