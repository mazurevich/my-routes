import NextAuth, { AuthOptions } from "next-auth";
import StravaProvider from "next-auth/providers/strava";

const stravaProvider = StravaProvider({
  clientId: process.env.STRAVA_CLIENT_ID ?? "",
  clientSecret: process.env.STRAVA_CLIENT_SECRET ?? "",
});

if (
  typeof stravaProvider.authorization !== "string" &&
  stravaProvider.authorization?.params?.scope
) {
  stravaProvider.authorization.params.scope =
    "activity:read_all,profile:read_all";
}

export const authOptions: AuthOptions = {
  providers: [stravaProvider],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    jwt: async ({ token, user, account }) => {
      console.log("jwt callback", { token, user, account });

      if (user) {
        token.userId = user.id;
      }
      if (account && account.access_token) {
        token.accessToken = account.access_token;
      }

      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
