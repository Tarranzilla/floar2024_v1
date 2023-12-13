import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="manifest" href="/manifest.webmanifest" />
                {/* other head elements as needed */}
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
