import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

import { bgDark, primary } from "@/common/tokens";
import { Layout } from "@/components/Layout";

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${bgDark};
    color: ${primary};
    font-family: 'Montserrat', sans-serif;
    }

  html {
    font-size: 8px;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyled />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
