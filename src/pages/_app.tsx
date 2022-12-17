import localFont from "@next/font/local";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import type { AppProps } from "next/app";
import "../../styles/globals.css";

const notoSansJP = localFont({
  src: "../../styles/fonts/Noto_Sans_JP.woff2",
  weight: "700",
  variable: "--font-noto-sans-jp",
});

const libreBaskerville = localFont({
  src: "../../styles/fonts/Libre_Baskerville.woff2",
  weight: "700",
  variable: "--font-libre-baskerville",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={clsx(
        notoSansJP.variable,
        libreBaskerville.variable,
        "font-sans"
      )}
    >
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}

export default MyApp;
