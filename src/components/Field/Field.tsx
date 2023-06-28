import { Cell } from "../Cell/Cell";
import "./field.css";

export const Field = ({ data }: { data: FieldData }) => {
  let cells = data.field.flat().map(((d: number) => <Cell num={d} />));
  return (
    <div className="h-96 w-96 grid grid-cols-9">
      {cells}
    </div>
  );
};
