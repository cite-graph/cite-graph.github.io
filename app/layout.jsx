import "./globals.css"
import "./index.css"
import "../styles/custom.css"
import "katex/dist/katex.min.css"

import React from "react"
import Footer from "@/components/footer"
import Body from "@/components/body"
import { ThemeProvider } from "next-themes"
import Header from "@/components/header"

export const metadata = {
  title: "CiteGraph.github.io",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  // const themeConfig = useThemeConfig()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="nextra-banner-hidden">
        <div dir="ltr">
          <Header />
          <Body>
            {/* <ThemeSwitch className="" /> */}
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>{children}</ThemeProvider>
          </Body>
          <Footer />
        </div>
      </body>
    </html>
  )
}
