import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { Layout } from "../../src/Layout";
import { useComponentLog } from "../../src/useComponentLog";

const Foo = () => {
  useComponentLog("routes/Foo");

  return <h2>Foo</h2>;
};

Foo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
  console.log("Foo.getServerSideProps is called");
  return { props: {} };
};

export default Foo;
