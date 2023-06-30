import { zeros, probrem1 } from "../../data/dummy";
import { Field } from "./Field";

export default {
  title: "Field",
  component: Field,
}

export const SudokuFieldZeros = () => <Field data={zeros} setField={(data: FieldData) => { }} />;
export const SudokuFieldProb = () => <Field data={probrem1} setField={(data: FieldData) => { }} />;
