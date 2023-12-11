/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXTAUTH_SECRET: "dG91Y2hvY2N1cmV4Y2xhaW1lZHN0YWdlc3F1YXJlZ2FpbnBoeXNpY2FsYnJva2Vuc2g=",
    },
    images: {
        domains: ["lh3.googleusercontent.com", "images.ctfassets.net"],
    },
};

const prod = process.env.NODE_ENV === "production";

const usePWA = false;
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    disable: prod ? false : true,
    skipWaiting: true,
});

module.exports = usePWA
    ? withPWA({
          ...nextConfig,
          // next.js config
      })
    : nextConfig;
