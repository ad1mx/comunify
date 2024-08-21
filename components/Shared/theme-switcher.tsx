"use client";

import React, { useState, useEffect } from "react";
import { Button, buttonVariants } from "../ui/button";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [loaded, setLoaded] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleThemeChange = () => {
    if (resolvedTheme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <div className="h-10 w-10">
      {loaded ? (
        <Button
          onClick={handleThemeChange}
          variant={"ghost"}
          size={"icon"}
          className="rounded-xl"
        >
          {resolvedTheme === "dark" ? (
            <FiSun size={"1.2em"} />
          ) : (
            <FiMoon size={"1.2em"} />
          )}
        </Button>
      ) : null}
    </div>
  );
};

export default ThemeSwitcher;
