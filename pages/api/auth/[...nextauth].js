import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import User from "../../../models/user";
import db from "../../../utils/db";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  callback: {
    async jwt({ user, token }) {
      if (user?._id) token._id = user._id;
      if (user?.role) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.role) session.user.role = token.role;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        let found = false;
        let user;

        await db.connect();

        if (credentials.handles.instagram && !found) {
          await db.connect();

          user = await User.findOne({
            handles: {
              instagram: credentials.handles.instagram,
            },
          });

          await db.disconnect();

          if (
            user &&
            bcryptjs.compareSync(credentials.password, user.password)
          ) {
            found = true;

            return {
              _id: user._id,
              handles: { ...user.handles },
              profile_pic: user.profile_pic,
              role: user.role,
            };
          }

          throw new Error("Invalid handle or password");
        }

        if (credentials.handles.email && !found) {
          await db.connect();

          user = await User.findOne({
            handles: {
              email: credentials.handles.email,
            },
          });

          await db.disconnect();

          if (
            user &&
            bcryptjs.compareSync(credentials.password, user.password)
          ) {
            found = true;

            return {
              _id: user._id,
              handles: { ...user.handles },
              profile_pic: user.profile_pic,
              role: user.role,
            };
          }

          throw new Error("Invalid handle or password");
        }

        if (credentials.handles.twitter && !found) {
          await db.connect();

          user = await User.findOne({
            handles: {
              twitter: credentials.handles.twitter,
            },
          });

          await db.disconnect();

          if (
            user &&
            bcryptjs.compareSync(credentials.password, user.password)
          ) {
            found = true;

            return {
              _id: user._id,
              handles: { ...user.handles },
              profile_pic: user.profile_pic,
              role: user.role,
            };
          }

          throw new Error("Invalid handle or password");
        }
      },
    }),
  ],
});
