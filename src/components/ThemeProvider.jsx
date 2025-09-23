"use client";
import { Provider } from "@chakra-ui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Provider>
        {children}
      </Provider>
    </NextThemesProvider>
  );
}
