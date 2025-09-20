"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@chakra-ui/react";

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Switch.Root
      checked={isDark}
      onCheckedChange={() => setTheme(isDark ? "light" : "dark")}
      colorPalette="transparent"
      size="sm"
      aria-label="Toggle theme"
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
    </Switch.Root>
  );
}

export { ThemeToggle };