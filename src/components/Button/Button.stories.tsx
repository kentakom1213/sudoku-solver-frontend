import Button from "./Button"

export default {
  title: "Button",
  component: Button,
}

// 数字を表示するボタン
export const NumberButton = ({ num, is_selected }: { num: number, is_selected: boolean }) => (
  <Button className={`h-20 w-20 ${is_selected ? 'btn-selected' : ''}`}>
    {num}
  </Button>
);

// 数字のボタン（テスト用）
export const NumberButton1_true = () => <NumberButton num={1} is_selected={true} />;
export const NumberButton1_false = () => <NumberButton num={1} is_selected={false} />;

// APIを呼び出すボタン
export const EnterButton = (props: any) => (
  <Button {...props} className="h-20 w-60">
    Submit
  </Button>
);
