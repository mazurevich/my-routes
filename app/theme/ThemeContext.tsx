"use client";
import { Theme } from "@/app/types/theme";
import { FC, ReactNode, createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light" as Theme,
  toggleTheme: () => {},
});

type ThemeContextProps = {
  theme: Theme;
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeContextProps> = ({
  children,
  theme: initialTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContext.displayName = "ThemeContext";
