"use client";

import { Toggle } from "@/components/Toggle";
import { useTheme } from "@/theme";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Toggle
      value={isDark}
      onChange={(isDark) => {
        console.log("changing theme");
        toggleTheme();
      }}
      className={isDark ? "bg-gray-800" : "bg-gray-200"}
    />
  );
};
