export interface Field {
  field: Array<Array<number>>,
}

export interface Sudoku {
  field: Field,
  answer: Field | undefined,
}
