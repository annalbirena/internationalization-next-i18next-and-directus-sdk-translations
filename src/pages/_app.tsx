import { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function MinskyLandingApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Minsky | Open Technology Innovation</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MinskyLandingApp);
