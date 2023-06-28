import { Cell } from "../Cell/Cell";

export const Field = ({ data }: { data: FieldData }) => {
  let cells = Array.from(data.field.flat().entries())
              .map(([i, d]: [number, number]) => <Cell key={i} num={d} />);
  return (
    <div className="h-auto w-auto grid grid-cols-9 rounded-md border-4 border-black">
      {cells}
    </div>
  );
};
