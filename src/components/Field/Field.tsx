import { useState } from "react";
import { Cell } from "../Cell/Cell";
import { ErrorModal, InputModal } from "../Modal/Modal.stories";

export const Field = ({ props }: { props: Props }) => {
  // fieldの構成
  let [fieldData, setField, isError, setIsError] = [props.fieldData, props.setField, props.isError, props.setIsError];

  // 編集するセルの位置
  let [idx, setIdx] = useState(0);

  // Inputモーダルの表示
  let [showInputModal, setInputModal] = useState(false);

  // 一時的なフィールド
  let tmpField = fieldData;

  // セルを編集
  const setNumber = (num: number) => {
    // 一時的なフィールドを編集
    tmpField.field[idx] = num;
    // 反映
    setField(tmpField);
  };

  // 表示するセル
  let cells = Array.from(fieldData.field.entries())
    .map(([i, d]: [number, number]) => <Cell key={i} idx={i} num={d} setShowModal={setInputModal} setIdx={setIdx} />);

  return (
    <>
      <div className="h-auto w-auto p-0.5 grid grid-cols-9 rounded-md border-4 border-black">
        {cells}
      </div>
      {
        showInputModal ? <InputModal num={fieldData.field[idx]} setShowModal={setInputModal} setNumber={setNumber} /> : <></>
      }
      {
        isError ? <ErrorModal setShowModal={setIsError} /> : <></>
      }
    </>
  );
};
