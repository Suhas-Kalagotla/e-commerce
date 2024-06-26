import { DefaultUser } from "next-auth";
import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      role: string;
      username: string;
      cartId: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: string;
    username: string;
    cartId : string ; 
  }
}
