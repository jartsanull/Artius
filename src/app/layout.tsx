import type { Metadata } from "next";
import "./globals.css";
import NaviBar from "./componentsMain/navBar";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <NaviBar />
        <main>{children}</main>
        </body>
        </html>
    );
}


