import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Next App by Junaid Ali",
  description: "Copy Right © all Right Recerved by Junaid Ali",
  applicationName:"Bg Changer"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
