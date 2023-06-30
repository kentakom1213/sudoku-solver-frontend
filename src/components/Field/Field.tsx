import { useState } from "react";
import { Cell } from "../Cell/Cell";
import { InputModal } from "../Modal/Modal.stories";

export const Field = ({ data, setter }: { data: FieldData, setter?: FieldSetter }) => {
  let cells = Array.from(data.field.entries())
    .map(([i, d]: [number, number]) => <Cell key={i} idx={i} num={d} />);

  // 編集するセルの位置
  let [idx, setIdx] = useState(0);

  return (
    <>
      <div className="h-auto w-auto p-0.5 grid grid-cols-9 rounded-md border-4 border-black">
        {cells}
      </div>
      <InputModal idx={idx} num={data.field[idx]} />
    </>
  );
};
