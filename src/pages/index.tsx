import { GetServerSideProps } from "next";
import { Layout } from '@/components/Layout/Layout';
import { useState } from "react";

export const API_URL = 'https://sudoku.shuttleapp.rs';

export default function Home() {
  // 初期値
  let field_init: FieldData = {
    field: [
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
  };

  const probrem1: FieldData = {
    field: [
      7, 0, 2, 6, 4, 0, 5, 9, 3,
      0, 1, 5, 7, 3, 9, 0, 8, 4,
      9, 4, 0, 2, 8, 5, 0, 6, 7,
      1, 0, 7, 5, 9, 0, 3, 0, 8,
      2, 9, 8, 0, 7, 3, 6, 1, 5,
      5, 3, 4, 0, 1, 0, 9, 7, 0,
      0, 0, 1, 0, 0, 0, 4, 3, 0,
      4, 0, 0, 0, 6, 8, 7, 0, 0,
      3, 7, 6, 1, 5, 4, 8, 2, 0
    ]
  };

  // useState
  let [field, setField] = useState<FieldData>(probrem1);

  // props
  let props: Props = {
    fieldData: field,
    setField: setField,
  };

  return (
    <Layout props={props} />
  );
};

// ページ読み込み時にAPIサーバーを起こす
export const getServerSideProps: GetServerSideProps = async () => {
  // ソルバAPIにアクセス
  const res = await fetch(API_URL);

  console.log(res);

  return {
    props: {}
  };
};

