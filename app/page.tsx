import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";
import { IP } from "./components/IP";
import { Map } from "./components/Map";
import { getPositionByIp, getIP } from "./utils";
import { signIn } from "next-auth/react";
import { StravaLoginButton } from "./components/StravaLoginButton";

export default async function Home() {
  // const ip = getIP();
  // const coords = await getPositionByIp(ip);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StravaLoginButton />
      <Map defaultPosition={{ lat: 23, lng: 54 }} />
    </main>
  );
}
