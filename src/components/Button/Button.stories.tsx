import Button from "./Button"

export default {
  title: "Button",
  component: Button,
}

// 数字を表示するボタン
export const NumberButton = ({ num, ...props }: { num: number, props?: any }) => (
  <Button {...props} className="h-20 w-20">
    {num}
  </Button>
);

// 数字のボタン
export const NumberButton1 = () => <NumberButton num={1} />;
export const NumberButton2 = () => <NumberButton num={2} />;
export const NumberButton3 = () => <NumberButton num={3} />;
export const NumberButton4 = () => <NumberButton num={4} />;
export const NumberButton5 = () => <NumberButton num={5} />;
export const NumberButton6 = () => <NumberButton num={6} />;
export const NumberButton7 = () => <NumberButton num={7} />;
export const NumberButton8 = () => <NumberButton num={8} />;
export const NumberButton9 = () => <NumberButton num={9} />;

// APIを呼び出すボタン
export const EnterButton = (props: any) => (
  <Button {...props} className="h-20 w-60">
    Submit
  </Button>
);
