import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { SnackbarProvider } from "notistack";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.scss";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    // Remove the server-side injected CSS.
    // eslint-disable-next-line no-undef
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const authLayout = ["/", "/auth/logout", "/redirect"].includes(
    router.pathname
  );

  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <RecoilRoot>
        <SnackbarProvider>
          {authLayout ? (
            <Component {...pageProps} />
          ) : (
            <Component {...pageProps} />
          )}
        </SnackbarProvider>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
