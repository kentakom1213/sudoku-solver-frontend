import { ReactNode } from "react";

export const Modal = ({ setShowModal, children }: { setShowModal?: (state: boolean) => void, children: ReactNode }) => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      {children}
    </div>
  );
};
