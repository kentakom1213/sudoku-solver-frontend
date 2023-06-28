import { zeros, probrem1 } from "../../data/dummy";
import { Field } from "./Field";

export default {
  title: "Field",
  component: Field,
}

export const SudokuFieldZeros = () => <Field data={zeros} />;
export const SudokuFieldProb = () => <Field data={probrem1} />;
