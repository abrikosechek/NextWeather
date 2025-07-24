import "@/app/global.scss"
import { ReactNode } from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['cyrillic', 'latin'] })

interface Props {
  children: ReactNode
}

export const MainProvider = ({ children }: Props) => {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  )
}