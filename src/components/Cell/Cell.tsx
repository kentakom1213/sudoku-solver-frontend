export const Cell = ({ num }: { num: number }) => (
  <span className="cell">
    {num == 0 ? ' ' : num}
  </span>
);
