import { InputModal } from "../Modal/Modal.stories";

export const Cell = ({ idx, num, setShowModal, setIdx }: { idx: number, num: number, setShowModal: (state: boolean) => void, setIdx: (idx: number) => void }) => {
  const onClick = () => {
    // セルのインデックスを設定
    setIdx(idx);
    // モーダルをオンに
    setShowModal(true);
  };

  return (
    <button className="cell" onClick={onClick}>
      {num == 0 ? ' ' : num}
    </button>
  );
};
