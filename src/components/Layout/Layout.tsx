import { Header } from "../Header/Header";
import { Body } from "../Body/Body";
import { Footer } from "../Footer/Footer";

export const Layout = ({ props }: { props: Props }) => {
  return (
    <>
      <Header />
      <Body props={props} />
      <Footer />
    </>
  );
};
