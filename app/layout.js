import "./globals.css";

export const metadata = {
  title: "Sirjanjeet Singh — SDE & Full Stack Developer",
  description:
    "Portfolio of Sirjanjeet Singh — B.Tech IT at BPIT, GGSIPU Delhi. Building full-stack products, targeting SDE & frontend internships.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
