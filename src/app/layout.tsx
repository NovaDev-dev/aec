import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/calendar.css";


const coco = localFont({
  src: [ 
    { path: "/fonts/CocoBiker.ttf", weight: "300" },
    { path: "/fonts/CocoBiker-Bold.ttf", weight: "700" }
  ],

  variable: "--font-coco",
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100','200','300','400','500','600','700','800','900'],
})

export const metadata: Metadata = {
  title: "Asi es Colombia",
  description: "Colombian Dance Group in YYC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${coco.variable}`}>
      <body>{children}</body>
    </html>
  );
}
