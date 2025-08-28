import "../ui/globals.css";
import { geistSans, geistMono } from "../ui/fonts.js"

export const metadata = {
  title: "ECommerce App",
  description: "Web projekat 2024/2025 ECommerce App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
