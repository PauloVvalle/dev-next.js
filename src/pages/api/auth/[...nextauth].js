import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { config } from 'dotenv';
config();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});