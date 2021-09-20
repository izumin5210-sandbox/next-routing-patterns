import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useComponentLog } from "../src/useComponentLog";
import { ReactElement, ReactNode, useEffect } from "react";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useComponentLog("App");
  useEffect(() => {
    const cb = () => {
      console.log("unload");
      return false;
    };
    window.addEventListener("unload", cb);
    return () => {
      window.removeEventListener("unload", cb);
    };
  });
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
export default MyApp;
