"use client";
import Image from "next/image";
import { signOut, signIn, useSession } from "next-auth/react";

export const StravaLoginButton = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="flex items-center justify-center w-40 h-12 rounded-lg bg-slate-500 text-white"
      >
        <Image
          src="/strava.svg"
          alt="strava"
          width={24}
          height={24}
          className="mr-2"
        />
        <span>Disconnect from Strava</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="flex items-center justify-center w-40 h-12 rounded-lg bg-slate-500 text-white"
    >
      <Image
        src="/strava.svg"
        alt="strava"
        width={24}
        height={24}
        className="mr-2"
      />
      <span>Connect to Strava</span>
    </button>
  );
};
