import { Cell } from "./Cell";

export default {
  title: "Cell",
  component: Cell,
}

export const Cell1 = () => {
  return (
    <Cell idx={0} num={1} setShowModal={(s: boolean) => { }} setIdx={(i: number) => { }} />
  );
};
