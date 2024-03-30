import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        id?: string;
        username?: string;
        roles?: string
    }

    interface Session {
        user?: User
    }
}