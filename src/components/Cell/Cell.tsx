import { InputModal } from "../Modal/Modal.stories";

export const Cell = ({ idx, num }: { idx: number, num: number }) => {
  return (
    <button className="cell">
      {num == 0 ? ' ' : num}
    </button>
  );
};
