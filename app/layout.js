import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // Include only the weights you need
});

export const metadata = {
  title: "Car Deal",
  description: "Book a car",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}  `}>{children}</body>
    </html>
  );
}
