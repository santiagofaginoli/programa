import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Programa Digital",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
