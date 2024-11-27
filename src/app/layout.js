import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ArtsLogistics - Skräddarsydda logistiklösningar",
  description: "ArtsLogistics erbjuder skräddarsydda logistiklösningar för konst och värdefulla föremål. Säkerhet, precision och tillförlitlighet är våra ledord.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <head>
        {/* Meta taggar för korrekt rendering och SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="ArtsLogistics erbjuder skräddarsydda logistiklösningar för konst och värdefulla föremål. Säkerhet, precision och tillförlitlighet är våra ledord."
        />
        <meta name="keywords" content="logistik, konstlogistik, skräddarsydda lösningar, transport, konst, värdeföremål, säker logistik" />
        <meta name="author" content="ArtsLogistics AB" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (för social delning, t.ex. Facebook, LinkedIn) */}
        <meta property="og:title" content="ArtsLogistics - Skräddarsydda logistiklösningar" />
        <meta
          property="og:description"
          content="Specialister på logistik för konst och värdefulla föremål. Vårt team erbjuder skräddarsydda lösningar med säkerhet och precision."
        />
        <meta property="og:url" content="https://www.artslogistics.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.artslogistics.com/images/og-image.jpg" />

        {/* Twitter Card (för delning på Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ArtsLogistics - Skräddarsydda logistiklösningar" />
        <meta
          name="twitter:description"
          content="Logistiklösningar anpassade för konst och värdefulla föremål. Vi prioriterar säkerhet, precision och tillförlitlighet."
        />
        <meta name="twitter:image" content="https://www.artslogistics.com/images/twitter-image.jpg" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
