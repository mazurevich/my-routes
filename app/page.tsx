import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";
import Image from "next/image";
import { IP } from "./components/IP";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <IP />
    </main>
  );
}
