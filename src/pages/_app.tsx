import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

import { bgDark, primary } from "@/common/tokens";
import { Layout } from "@/components/Layout";
import { StoreProvider } from "@/store/StoreProvider";

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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <StoreProvider>
        <GlobalStyled />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </>
  );
}
