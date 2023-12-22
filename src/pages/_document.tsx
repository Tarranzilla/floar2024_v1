import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <link rel="manifest" href="/manifest.webmanifest" />
                <link rel="icon" href="/idv/marca/pwa_icons/icon-128x128.png" />
                <meta name="theme-color" content="#6b1212" />
                {/* other head elements as needed */}
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
