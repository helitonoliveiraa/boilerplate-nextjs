import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '@/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="favicon.ico" type="/img/icon-512.png" />
        <link
          rel="apple-touch-icon"
          href="favicon.ico"
          type="/img/icon-512.png"
        />
        <meta
          name="description"
          content="A simple project started to work with TypeScript, React, NextJS and Styled-Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
