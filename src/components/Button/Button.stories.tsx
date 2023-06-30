import { Button } from "./Button"

export default {
  title: "Button",
  component: Button,
}

// 数字を表示するボタン
export const NumberButton = ({ num, is_selected }: { num: number, is_selected: boolean }) => {
  return (
    <Button className={`h-10 w-10 sm:h-14 sm:w-14 rounded ${is_selected ? 'btn-selected' : ''}`}>
      {num}
    </Button>
  );
};

// 数字のボタン（テスト用）
export const NumberButton1_true = () => <NumberButton num={1} is_selected={true} />;
export const NumberButton1_false = () => <NumberButton num={1} is_selected={false} />;

// APIを呼び出すボタン
export const SubmitButton = ({ field }: { field: FieldData }) => {
  return (
    <Button className="confirm-btn hover:bg-green-600 hover:border-green-600">
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
