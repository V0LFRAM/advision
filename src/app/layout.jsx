import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "Next Tailwind Theme",
  description: "Light/Dark theme toggle with next-themes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className="min-h-dvh">
        <ThemeProvider>
          <header className="sticky top-0 z-10 border-b bg-white/70 backdrop-blur dark:bg-slate-900/70">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
              <h1 className="text-lg font-semibold">Next Tailwind Theme</h1>
              <ThemeToggle />
            </div>
          </header>

          <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

          <footer className="mx-auto max-w-5xl px-4 py-6 text-sm opacity-70">
            © {new Date().getFullYear()}
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
