import { Cell } from "../Cell/Cell";
import "./field.css";

export const Field = ({ data }: { data: FieldData }) => {
  let cells = Array.from(data.field.flat().entries())
              .map(([i, d]: [number, number]) => <Cell key={i} num={d} />);
  return (
    <div className="h-96 w-96 grid grid-cols-9">
      {cells}
    </div>
  );
};
