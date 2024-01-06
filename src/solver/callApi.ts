export const SOLVER_URL = 'https://sudoku.shuttleapp.rs/solve';

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

const convertToFieldData = (field: FieldDataToFetch): FieldData => {
  let field81: Field81 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      field81[r * 9 + c] = field.field[r][c];
    }
  }

  return {
    field: field81,
  }
};

export const callSolver = (field: FieldData, setSolvedField: FieldSetter, setErrorStatus: (state: number) => void) => {
  // fetch用に変換
  let fieldToFetch = convertToFieldDataToFetch(field);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fieldToFetch),
  };

  console.log(fieldToFetch);

  fetch(SOLVER_URL, requestOptions)
    .catch((error) => {
      console.error('Error:', error);
    })
    .then((response) => {
      console.log(response);
      // ステータスコードのチェック
      if (response?.status == 400) {
        setErrorStatus(1);
        return;
      } else if (!response?.ok) {
        setErrorStatus(2);
        return;
      }
      return response?.json();
    })
    .then((data) => {
      if (data === undefined) {
        return;
      }
      let solvedField = convertToFieldData(data);
      setSolvedField(solvedField);
    });
};
