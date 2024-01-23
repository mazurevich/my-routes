/**
 * v0 by Vercel.
 * @see https://v0.dev/t/crGXBAH4WBt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
} from "@/components/ui";
import { getUserInitials } from "@/app/utils";
import { use } from "react";
import { signOut } from "next-auth/react";
import { LogoutButton } from "../logout-button";

export async function AppHeader() {
  const session = await getServerSession();

  const user = session?.user;

  return (
    <header className="color-hite flex h-16 w-full shrink-0 items-center justify-center bg-orange-600 px-4 md:px-6">
      <div className="flex w-full max-w-7xl justify-between ">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2" href="/">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">My Routes</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/import"
            >
              Import
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/about"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button size="icon" variant="link">
                  <Avatar>
                    <AvatarImage src={user.image ?? ""} alt="@shadcn" />
                    <AvatarFallback>
                      {getUserInitials(user.name ?? "")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="sr-only">User</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-30 flex-col">
                <Link
                  className="left flex w-full justify-center text-center"
                  href="/account"
                >
                  Account
                </Link>
                <Separator className="my-2" />
                <LogoutButton className="w-full text-left text-base font-normal" />
              </PopoverContent>
            </Popover>
          ) : null}
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
