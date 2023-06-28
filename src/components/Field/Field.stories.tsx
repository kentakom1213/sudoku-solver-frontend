import { Field } from "./Field";

export default {
  title: "Field",
  component: Field,
}

const zeros: FieldData = {
  field: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
};

const prob: FieldData = {
  field: [
    [7, 0, 2, 6, 4, 0, 5, 9, 3],
    [0, 1, 5, 7, 3, 9, 0, 8, 4],
    [9, 4, 0, 2, 8, 5, 0, 6, 7],
    [1, 0, 7, 5, 9, 0, 3, 0, 8],
    [2, 9, 8, 0, 7, 3, 6, 1, 5],
    [5, 3, 4, 0, 1, 0, 9, 7, 0],
    [0, 0, 1, 0, 0, 0, 4, 3, 0],
    [4, 0, 0, 0, 6, 8, 7, 0, 0],
    [3, 7, 6, 1, 5, 4, 8, 2, 0]
  ]
};

export const SudokuFieldZeros = () => <Field data={zeros} />;
export const SudokuFieldProb = () => <Field data={prob} />;
