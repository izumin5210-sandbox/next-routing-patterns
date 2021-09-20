import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ReactElement } from "react";
import { Layout } from "../../src/Layout";
import { useComponentLog } from "../../src/useComponentLog";

const DynamicRoute = ({ path }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useComponentLog("dynamic-routes/DynamicRoute");

  return <h2>{path} w/ DynamicRoute</h2>;
};

DynamicRoute.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (ctx.params == null) return { notFound: true };
  const path = ctx.query.path ?? "";
  console.log("DynamicRoute.getServerSideProps is called");
  return { props: { path } };
};

export default DynamicRoute;
