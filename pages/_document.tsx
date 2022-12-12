import { Html, Head, NextScript, Main } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;400;900&display=swap"
          rel="stylesheet"
        />

        <Script src="https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r71/three.min.js" />
      </Head>
      <Main />
      <NextScript />
    </Html>
  );
}
