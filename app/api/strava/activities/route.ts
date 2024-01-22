import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { activitiesSchema } from "./activitySchema";
import type { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token?.accessToken || !token?.userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const activities = await fetch(
    `https://www.strava.com/api/v3/athletes/${token.userId}/activities`,
    {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    }
  ).then((res) => res.json());

  const parsedData = activitiesSchema.safeParse(activities);

  if (!parsedData.success) {
    console.error(parsedData.error);
    return new Response("Internal Server Error", { status: 500 });
  }

  return NextResponse.json(parsedData.data);
}
