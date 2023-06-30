// 固定長配列
type FixedLengthArray<T, N extends number, A extends any[] = []> =
  A extends { length: N } ? A : FixedLengthArray<T, N, [...A, T]>;

// 配列の横
type Row = FixedLengthArray<number, 9>;

// 9x9の固定長配列
type Field9x9 = FixedLengthArray<Row, 9>;

// 1次元に直されたフィールド
type Field81 = FixedLengthArray<number, 81>;

// 3x3のブロックの配列
type Blocks = FixedLengthArray<Row, 9>;

// 盤面
type FieldData = {
  field: Field81,
};

// APIにリクエストするための盤面
type FieldDataToFetch = {
  field: Field9x9,
};

// 数独
type SudokuData = {
  field: FieldData,
  answer: FieldData | undefined,
};

// props
type FieldSetter = (data: FieldData) => void;

type Props = {
  fieldData: FieldData,
  setField: FieldSetter,
}
