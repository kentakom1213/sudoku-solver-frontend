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

export const ErrorModal = ({ setShowModal }: { setShowModal: (state: boolean) => void }) => {
  return (
    <Modal setShowModal={(dummy) => { }}>
      <div className="h-40 w-60 p-5 rounded-2xl text-center bg-white">
        <h3 className="mb-1 text-2xl font-bold text-red-600">入力エラー</h3>
        <p>
          入力を満たす答えが<br />見つかりませんでした
        </p>
        <button className="m-2 py-1 px-5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-lg" onClick={() => setShowModal(false)}>OK</button>
      </div>
    </Modal>
  )
};

export const InputModal = ({ num, setShowModal, setNumber }: { num: number, setShowModal: (state: boolean) => void, setNumber: (num: number) => void }) => {
  return (
    <Modal setShowModal={setShowModal}>
      <div className="h-auto w-auto p-3 sm:p-5 grid grid-cols-3 gap-1 sm:gap-2 rounded-xl bg-white">
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
