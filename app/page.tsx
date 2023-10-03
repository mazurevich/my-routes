import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";
import Image from "next/image";
import { IP } from "./components/IP";
import { Map } from "./components/Map";
import { getPositionByIp, getIP } from "./utils";

export default async function Home() {
  const ip = getIP();
  const coords = await getPositionByIp(ip);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <IP />
      <Map defaultPosition={coords} />
    </main>
  );
}
