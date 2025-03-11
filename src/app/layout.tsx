import MainWrapper from "@src/components/templates/mainWrapper/MainWrapper";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "@src/sass/global.sass";

const myFont = localFont({
  src: "../font/proximanova_regular.ttf",
  display: "swap",
  variable: "--font-my-font",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
