import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { Provider } from "react-redux";
import Store from "@/Store";

import Layout from "@/layout/layout";
import { Inter } from "next/font/google";
import { HydrationProvider, Client } from "react-hydration-provider";
// import App from 'next/app';
const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }) => {
  return (
    <>
      <HydrationProvider>
        <Client>
          <Layout>
            <Provider store={Store}>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                  



                />
              </Head>

              <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6500167973378849"
                crossorigin="anonymous"
              ></Script>

              <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                strategy="afterInteractive"
              />
              <main className={inter.className}>
                <Component {...pageProps} />
              </main>
            </Provider>
          </Layout>
        </Client>
      </HydrationProvider>
    </>
  );
};

export default App;
