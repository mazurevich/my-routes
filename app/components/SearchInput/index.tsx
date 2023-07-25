"use client";
import { useTheme } from "@/app/theme";
import clsx from "clsx";
import { useEffect, useState } from "react";

export function SearchInput() {
  const [search, setSearch] = useState("");
  const { theme } = useTheme();

  return (
    <input
      type="text"
      className={clsx(
        "border border-gray-300 rounded-md px-4 py-2",
        theme === "dark" && "bg-gray-800 text-white"
      )}
      placeholder="Search"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
