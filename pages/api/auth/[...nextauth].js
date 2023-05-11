import NextAuth, {getServerSession} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

const adminEmails = ['dave.waldorf@me.com', 'stas.st010@gmail.com', 'argishtiantonian@gmail.com', 'Gfrndgfrndgfrnd@gmail.com'];
const SECRET = 'JZCbnm7ZTdNiaTTw';

export const authOptions = {
  secret: SECRET,
  providers: [
    GoogleProvider({
      clientId: "98541508321-e23um8g9d96cclt8uj59uhn14d1bp37u.apps.googleusercontent.com",
      clientSecret: "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"
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: ({session,token,user}) => {
      if (adminEmails.includes(session?.user?.email)) {
        return session;
      } else {
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);

export async function isAdminRequest(req,res) {
  const session = await getServerSession(req,res,authOptions);
  if (!adminEmails.includes(session?.user?.email)) {
    res.status(401);
    res.end();
    throw 'not an admin';
  }
}