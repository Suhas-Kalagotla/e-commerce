import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session({ session, token }) {
      session.user = {
        id: token.id as string,
        email: token.email as string,
        username: token.username as string,
        role: token.role as string,
        cartId: token.cartId as string,
      };

      return session;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
        token.cartId = user.cartId;
      }
      return token;
    },
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(
            process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/login",
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            },
          );

          const data = await res.json();
          if (data.user) {
            return data.user;
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
