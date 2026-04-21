import { Geist, Geist_Mono } from "next/font/google";
import { QuotesContextProvider } from "@/app/QuotesContext";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Random Quotes App",
  description: "A beautiful quote generator using Next.js and DaisyUI",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-100 text-base-content transition-colors duration-300">
        <QuotesContextProvider>
          <nav className="navbar bg-base-200 text-base-content shadow-md sm:px-8">
            <div className="flex-1">
              <Link href="/" className="btn btn-ghost text-xl normal-case">
                QuotesApp
              </Link>
            </div>
            <div className="flex-none gap-2 sm:gap-4">
              <ul className="menu menu-horizontal px-1 font-semibold hidden sm:flex">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/user/quotes/liked"
                    className="hover:text-primary"
                  >
                    Liked Quotes
                  </Link>
                </li>
              </ul>

              <Link
                href="/user/quotes/liked"
                className="btn btn-ghost sm:hidden text-base-content"
              >
                Liked ❤️
              </Link>

              <label
                className="swap swap-rotate btn btn-circle btn-ghost text-base-content"
                aria-label="Toggle Theme"
              >
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="dark"
                />
                <span className="swap-off text-2xl">☀️</span>
                <span className="swap-on text-2xl">🌙</span>
              </label>
            </div>
          </nav>

          <div className="flex-grow">{children}</div>
        </QuotesContextProvider>
      </body>
    </html>
  );
}

/*just testing github */