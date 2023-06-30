import { Field9x9, FieldData, FieldDataToFetch, FieldSetter } from "@/types";

export const API_URL = 'https://sudoku.shuttleapp.rs/solve';

const convertToFieldDataToFetch = (field: FieldData): FieldDataToFetch => {
  let field9x9: Field9x9 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < 81; i++) {
    let [r, c] = [i / 9 | 0, i % 9]; // | 0 は切り捨て除算
    field9x9[r][c] = field.field[i];
  }

  return {
    field: field9x9,
  }
};

export const callSolver = (field: FieldData, setSolvedField: FieldSetter) => {
  // fetch用に変換
  let fieldToFetch = convertToFieldDataToFetch(field);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fieldToFetch),
  };

  console.log(requestOptions);

  fetch(API_URL, requestOptions)
    .catch((error) => {
      console.error('Error:', error);
    })
    .then((response) => (
      response?.json()
    ))
    .then((data) => {
      setSolvedField(data);
    });
};
