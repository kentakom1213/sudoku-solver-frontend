import { NumberButton } from "../Button/Button.stories";
import { Modal } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
}

export const TestModal = () => {
  return (
    <Modal>
      <div className="h-40 w-60 p-5 bg-white rounded-2xl">
        テスト用Window
      </div>
    </Modal>
  );
};

export const InputModal = () => {
  return (
    <Modal>
      <div className="h-auto w-auto p-1 sm:p-2 grid grid-cols-3 gap-0.5 sm:gap-1 rounded-xl bg-white">
        <NumberButton num={1} is_selected={false} />
        <NumberButton num={2} is_selected={false} />
        <NumberButton num={3} is_selected={false} />
        <NumberButton num={4} is_selected={false} />
        <NumberButton num={5} is_selected={false} />
        <NumberButton num={6} is_selected={false} />
        <NumberButton num={7} is_selected={false} />
        <NumberButton num={8} is_selected={false} />
        <NumberButton num={9} is_selected={false} />
      </div>
    </Modal>
  );
};
