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
      size="sm"
      aria-label="Toggle theme"
      style={{
        transform: "scale(0.8)",
        minWidth: 0,
      }}
    >
      <Switch.HiddenInput />
      <Switch.Control bg="#1E1E1C" _dark={{ bg: "#DFE0DB", _checked: { bg: "white" } }}>
        <Switch.Thumb bg="#DFE0DB" _dark={{ bg: "#1E1E1C" }} />
      </Switch.Control>
    </Switch.Root>
  );
}

export { ThemeToggle };
