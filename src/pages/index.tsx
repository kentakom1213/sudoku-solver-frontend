import { GetServerSideProps } from "next";
import { Layout } from '@/components/Layout/Layout';
import { useState } from "react";

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

  // useState
  let [field, setField] = useState<FieldData>(field_init);

  return (
    <Layout />
  );
};

// ページ読み込み時にAPIサーバーを起こす
export const getServerSideProps: GetServerSideProps = async () => {
  // ソルバAPIにアクセス
  const res = await fetch("https://sudoku.shuttleapp.rs");

  console.log(res);

  return {
    props: {}
  };
};

