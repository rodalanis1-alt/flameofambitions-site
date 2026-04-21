export const metadata = {
  title: "Flameofambitions LLC",
  description: "Forged through discipline",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
