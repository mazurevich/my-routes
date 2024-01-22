import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextApiRequest } from "next";

export async function GET(request: NextApiRequest) {
  const { searchParams } = new URL(request.url ?? "");
  const id = searchParams.get("id");

  if (!id) {
    return new Response("Not Found", { status: 404 });
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token?.accessToken || !token?.userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const stream = await fetch(
    `https://www.strava.com/api/v3/activities/${id}/streams?keys=latlng&key_by_type=true`,
    {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    }
  ).then((res) => res.json());

  return NextResponse.json(stream);
}
