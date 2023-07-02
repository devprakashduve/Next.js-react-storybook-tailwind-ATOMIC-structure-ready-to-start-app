import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
const { GOOGLE_ID, GOOGLE_SECRET } = process.env;
if (!GOOGLE_ID) {
  throw new Error("Invalid GOOGLE_ID");
}
if (!GOOGLE_SECRET) {
  throw new Error("Invalid GOOGLE_SECRET");
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID:"",
      clientSecret: process.env.GOOGLE_SECRET?process.env.GOOGLE_SECRET:"",
    }),
  ],
});
