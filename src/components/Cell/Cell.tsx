import "./cell.css";

export const Cell = ({ num }: { num: number }) => (
  <span className="cell">
    {num}
  </span>
);
