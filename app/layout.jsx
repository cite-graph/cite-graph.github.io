import "./globals.css"

import { ThemeProvider } from "next-themes"
import Header from "@/components/layout/header"
import Body from "@/components/layout/body"
import Footer from "@/components/layout/footer"

export const metadata = {
    title: "CiteGraph",
    description: "CiteGraph",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="openhuman-banner-hidden">
                <div dir="ltr">
                    <Header />
                    <Body>
                        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                            {children}
                        </ThemeProvider>
                    </Body>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
