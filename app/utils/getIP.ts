import { headers } from "next/headers";

export function getIP(): string {
  const ip =
    headers().get("x-forwarded-for") || process.env.NEXT_PUBLIC_LOCAL_IP || "";

  return ip;
}
