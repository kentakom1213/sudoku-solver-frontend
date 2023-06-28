export const Cell = ({ num }: { num: number }) => {
  return (
    <span className="cell">
      {num == 0 ? ' ' : num}
    </span>
  );
};
