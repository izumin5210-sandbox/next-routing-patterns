import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { Layout } from "../../src/Layout";
import { useComponentLog } from "../../src/useComponentLog";

const Bar = () => {
  useComponentLog("routes/Bar");

  return <h2>Bar</h2>;
};

Bar.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
  console.log("Bar.getServerSideProps is called");
  return { props: {} };
};

export default Bar;
