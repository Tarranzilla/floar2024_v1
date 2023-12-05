import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "no-google-client-id-set",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "no-google-client-secret-set",
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID ?? "no-facebook-client-id-set",
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "no-facebook-client-secret-set",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
});

export default handler;
