import { useState } from "react";
import { callSolver } from "../../solver/callApi";
import { Button } from "./Button"

export default {
  title: "Button",
  component: Button,
}

// 数字を表示するボタン
export const NumberButton = ({ num, is_selected, setNumber }: { num: number, is_selected: boolean, setNumber: () => void }) => {
  return (
    <Button className={`h-16 w-16 sm:h-20 sm:w-20 rounded text-3xl sm:text-5xl ${is_selected ? 'btn-selected' : ''}`} otherProps={{ onClick: setNumber }}>
      {num}
    </Button>
  );
};

// 数字のボタン（テスト用）
export const NumberButton1_true = () => <NumberButton num={1} is_selected={true} setNumber={() => { }} />;
export const NumberButton1_false = () => <NumberButton num={1} is_selected={false} setNumber={() => { }} />;

// APIを呼び出すボタン
export const SubmitButton = ({ props }: { props: Props }) => {
  // fieldの構成
  let [fieldData, setField, errorStatus, setErrorStatus] = [props.fieldData, props.setField, props.errorStatus, props.setErrorStatus];

  let onClick = () => {
    // APIの呼び出し
    callSolver(fieldData, setField, setErrorStatus);
  };

  return (
    <Button className="confirm-btn hover:bg-green-600 hover:border-green-600" otherProps={{ onClick: onClick }}>
      Submit
    </Button>
  );
};

// 盤面をリセットするボタン
export const ResetButton = ({ setter }: { setter: FieldSetter }) => {
  let zeros: FieldData = {
    field: [
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]
  };

  return (
    <Button className="confirm-btn hover:bg-red-600 hover:border-red-600" otherProps={{ onClick: () => setter(zeros) }}>
      Reset
    </Button>
  );
};
