import { Button } from "./Button"

export default {
  title: "Button",
  component: Button,
}

// 数字を表示するボタン
export const NumberButton = ({ num, is_selected }: { num: number, is_selected: boolean }) => (
  <Button className={`h-14 w-14 ${is_selected ? 'btn-selected' : ''}`}>
    {num}
  </Button>
);

// 数字のボタン（テスト用）
export const NumberButton1_true = () => <NumberButton num={1} is_selected={true} />;
export const NumberButton1_false = () => <NumberButton num={1} is_selected={false} />;

// APIを呼び出すボタン
export const SubmitButton = (props: any) => {
  return (
    <Button {...props} className="h-14 w-36 mx-8">
      Submit
    </Button>
  );
};

// 盤面をリセットするボタン
export const ResetButton = (props: any) => {
  return (
    <Button {...props} className="h-14 w-36 mx-8">
      Reset
    </Button>
  );
};
