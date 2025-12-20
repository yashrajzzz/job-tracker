import type { Metadata } from "next";
import SessionWrapper from "./SessionWrapper";

export const metadata: Metadata = {
  title: "Job Tracker",
  // LLEFTTTTTTTTTTTTTTTTTTTT
  description: "{yyyyyyyyy}"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
