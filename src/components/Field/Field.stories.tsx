import { zeros, probrem1, testProps } from "../../data/dummy";
import { Field } from "./Field";

export default {
  title: "Field",
  component: Field,
}

export const SudokuFieldZeros = () => <Field props={testProps(zeros)} />;
export const SudokuFieldProb = () => <Field props={testProps(probrem1)} />;
