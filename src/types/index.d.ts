// 固定長配列
type FixedLengthArray<T, N extends number, A extends any[] = []> =
  A extends { length: N } ? A : FixedLengthArray<T, N, [...A, T]>;

// 配列の横
type Row = FixedLengthArray<number, 9>;

// 9x9の固定長配列
type Field9x9 = FixedLengthArray<Row, 9>;

// 3x3のブロックの配列
type Blocks = FixedLengthArray<Row, 9>;

// 盤面
type FieldData = {
  field: Field9x9,
};

// 数独
type SudokuData = {
  field: FieldData,
  answer: FieldData | undefined,
};

// Props
type Props = {
  problem: FieldData,
  answer?: FieldData,
};
