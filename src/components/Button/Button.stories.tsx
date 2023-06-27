import Button from "./Button"

export default {
  title: "Button",
  component: Button,
}

// 数字を表示するボタン
export const NumberButton = ({ num, ...props }: { num: number, props?: any }) => (
  <Button {...props} className="h-20 w-20 border-4 border-black rounded-2xl text-5xl">
    {num}
  </Button>
);

// 1のボタン（テスト）
export const NumberButton1 = () => <NumberButton num={1} />;

// 2のボタン（テスト）
export const NumberButton2 = () => <NumberButton num={2} />;

// APIを呼び出すボタン
export const EnterButton = () => <Button>Enter</Button>;
