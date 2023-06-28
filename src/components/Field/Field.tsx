import { data } from "autoprefixer";
import { Cell } from "../Cell/Cell";
import "./field.css";

// fieldの座標をBlockの座標に変換する
const fieldToBlock = (r: number, c: number) => {
  let block_r = r / 3;  // 所属するブロックのrow
  let block_c = c / 3;  // 所属するブロックのcolumn
  let block_id = 3 * block_r + block_c;  // 所属するブロックの座標
  let rr = r % 3;  // 所属するブロック内でのrow
  let cc = c % 3;  // 所属するブロック内でのcolumn
  let inner_id = 3 * rr + cc;
  return [block_id, inner_id];
};

// ブロックを切り出す
const getBlocks = (array: Field9x9) => {
  // 配列の初期化
  let res: Blocks = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  // コピーしていく
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let [r, c] = fieldToBlock(i, j);
      res[r][c] = array[i][j];
    }
  }

  return res;
};

// ブロックを描画する
export const Block = ({ block }: { block: Row }) => {
  let blocks = block.map((d: number) => <Cell num={d} />);
  return (
    <span>
      {blocks}
    </span>
  );
};

export const Field = ({ data }: { data: FieldData }) => {
  let blocks = getBlocks(data.field)
                .map((block) => <Block block={block} />);

  return (
    <div className="h-96 w-96 grid grid-cols-9">
      {blocks}
    </div>
  );
};

// export const Field = ({ data }: { data: FieldData }) => {
//   let cells = data.field.flat().map(((d: number) => <Cell num={d} />));
//   return (
//     <div className="h-96 w-96 grid grid-cols-9">
//       {cells}
//     </div>
//   );
// };
