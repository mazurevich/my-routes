"use client";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import { FC } from "react";

type LogoutButtonProps = {
  className?: string;
};

export const LogoutButton: FC<LogoutButtonProps> = ({ className }) => {
  return (
    <Button
      onClick={() => signOut()}
      size="icon"
      variant="ghost"
      className={cn("px-4 font-medium", className)}
    >
      Sign out
    </Button>
  );
};
