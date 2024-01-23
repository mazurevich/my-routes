"use client";
import Image from "next/image";
import { signOut, signIn, useSession } from "next-auth/react";

export const StravaLoginButton = () => {
  const { data: session } = useSession();

  const onClick = session ? signOut : signIn.bind(null, "strava");
  const text = session ? "Disconnect from Strava" : "Connect to Strava";
  return (
    <button
      onClick={() => onClick()}
      className="flex h-12 w-40 items-center justify-center rounded border border-orange-600"
    >
      <Image
        src="/strava.svg"
        alt="strava"
        width={24}
        height={24}
        className="mx-2"
      />
      <span>{text}</span>
    </button>
  );
};
