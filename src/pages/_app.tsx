import { ReactElement } from "react";
import { NextPage } from "next";
import "../styles/globals.css";
import { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
  getLayout?: (page:ReactElement) => JSX.Element;
}

type AppPropsWithLAyout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLAyout) {
  const getLayout = Component.getLayout || ((page) => page);
  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // );

  return getLayout(<Component {...pageProps} />);
}
