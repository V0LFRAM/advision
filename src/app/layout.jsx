import { Footer } from "@/componentsLayout/footer";
import { Home } from "@/componentsLayout/header";
// import { Provider } from "@/components/ui/provider";
import { inter } from "../lib/fonts";
// import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

export const metadata = {
  title: "Next Tailwind Theme",
  description: "Light/Dark theme toggle with next-themes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <Provider> */}
        <Home />
        <header>
          <div>
            <h1>Next Tailwind Theme</h1>
            {/* <ThemeToggle /> */}
          </div>
        </header>
        <main>{children}</main>
        <Footer />
        {/* </Provider> */}
      </body>
    </html>
  );
}
