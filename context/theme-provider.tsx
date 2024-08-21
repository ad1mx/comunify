"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContext = {
  theme: Theme | null;
  setTheme: React.Dispatch<React.SetStateAction<Theme | null>>;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContext | null>(null);

export const getSystemTheme = (): Theme => {
  const darkMode = window?.matchMedia?.(
    "(prefers-color-scheme: dark)"
  )?.matches;

  return darkMode ? "dark" : "light";
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    setTheme(storedTheme || getSystemTheme());
  }, []);

  useEffect(() => {
    if (!theme) return;

    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext)
    throw new Error("`useTheme` must be used within `ThemeProvider`");

  return themeContext;
};

export default ThemeProvider;
