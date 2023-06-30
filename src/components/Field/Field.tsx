import { useState } from "react";
import { Cell } from "../Cell/Cell";
import { InputModal } from "../Modal/Modal.stories";

export const Field = ({ data, setField }: { data: FieldData, setField: FieldSetter }) => {
  // 編集するセルの位置
  let [idx, setIdx] = useState(0);

  // モーダルの表示
  let [showModal, setShowModal] = useState(false);

  // 一時的なフィールド
  let tmpField = data;

  // セルを編集
  const setNumber = (num: number) => {
    // 一時的なフィールドを編集
    tmpField.field[idx] = num;
    // 反映
    setField(tmpField);
  };

  // 表示するセル
  let cells = Array.from(data.field.entries())
    .map(([i, d]: [number, number]) => <Cell key={i} idx={i} num={d} setShowModal={setShowModal} setIdx={setIdx} />);

  return (
    <>
      <div className="h-auto w-auto p-0.5 grid grid-cols-9 rounded-md border-4 border-black">
        {cells}
      </div>
      {
        showModal ? <InputModal num={data.field[idx]} setShowModal={setShowModal} setNumber={setNumber} /> : <></>
      }
    </>
  );
};
