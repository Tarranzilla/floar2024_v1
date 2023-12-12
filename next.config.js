/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXTAUTH_SECRET: "dG91Y2hvY2N1cmV4Y2xhaW1lZHN0YWdlc3F1YXJlZ2FpbnBoeXNpY2FsYnJva2Vuc2g=",
        GOOGLE_MAPS_API_KEY: "AIzaSyC3pq4vrT4FrZ0v5TNQ1NERWt3fypJDZ1k",
        GOOGLE_OAUTH_CLIENT_ID: "1085867012545-bjb484bj31st9g7g7cgb8aidc7tja0a6.apps.googleusercontent.com",
        GOOGLE_OAUTH_CLIENT_KEY: "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",
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
