import { GetServerSideProps } from "next";
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/Layout/Layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout />
  );
};

// ページ読み込み時にAPIサーバーを起こす
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://sudoku.shuttleapp.rs");
  console.log(res);

  let props: Props = {
    problem: {
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
    }
  };

  return {
    props: props
  };
};

