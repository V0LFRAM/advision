import { Provider } from "@/components/ui/provider";
import "./globals.css";

import { Inter, League_Spartan } from "next/font/google";
import { HeaderSection } from "@/components/header";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const league = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-league",
  display: "swap",
});

export const metadata = {
  title: "Next Tailwind Theme",
  description: "Light/Dark theme toggle with next-themes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[rgb(var(--bg))] text-[rgb(var(--fg))] h-auto relative max-w-[100vw] overflow-y-hidden!important`}
      >
        <Provider>
          <HeaderSection />
          <main className="">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
