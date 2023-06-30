import { NumberButton } from "../Button/Button.stories";
import { Modal } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
}

export const TestModal = () => {
  return (
    <Modal setShowModal={(s: boolean) => { }}>
      <div className="h-40 w-60 p-5 bg-white rounded-2xl">
        テスト用Window
      </div>
    </Modal>
  );
};

export const InputModal = ({ num, setShowModal, setNumber }: { num: number, setShowModal: (state: boolean) => void, setNumber: (num: number) => void }) => {
  return (
    <Modal setShowModal={setShowModal}>
      <div className="h-auto w-auto p-1 sm:p-2 grid grid-cols-3 gap-0.5 sm:gap-1 rounded-xl bg-white">
        <NumberButton num={1} is_selected={num == 1} setNumber={() => { num == 1 ? setNumber(0) : setNumber(1) }} />
        <NumberButton num={2} is_selected={num == 2} setNumber={() => { num == 2 ? setNumber(0) : setNumber(2) }} />
        <NumberButton num={3} is_selected={num == 3} setNumber={() => { num == 3 ? setNumber(0) : setNumber(3) }} />
        <NumberButton num={4} is_selected={num == 4} setNumber={() => { num == 4 ? setNumber(0) : setNumber(4) }} />
        <NumberButton num={5} is_selected={num == 5} setNumber={() => { num == 5 ? setNumber(0) : setNumber(5) }} />
        <NumberButton num={6} is_selected={num == 6} setNumber={() => { num == 6 ? setNumber(0) : setNumber(6) }} />
        <NumberButton num={7} is_selected={num == 7} setNumber={() => { num == 7 ? setNumber(0) : setNumber(7) }} />
        <NumberButton num={8} is_selected={num == 8} setNumber={() => { num == 8 ? setNumber(0) : setNumber(8) }} />
        <NumberButton num={9} is_selected={num == 9} setNumber={() => { num == 9 ? setNumber(0) : setNumber(9) }} />
      </div>
    </Modal>
  );
};
