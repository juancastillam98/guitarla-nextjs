import { Inter } from 'next/font/google'
import "../styles/globals.css"
import { Outfit  } from 'next/font/google'
import "normalize.css";
import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import ContextProvider from "./context"

import Link from "next/link";
/*export const metadata = { //el metadata se ejecua en el server, no en el client
  title: 'Homepage',
  description: 'Página de inicio',
}*/
const outfit = Outfit({
    weight: ["400", "700", "900"],
    subsets: ["latin"]
})//letra outfit de google font


export default function RootLayout({ children}) {

    return (
      <html>
      <ContextProvider>
          <body className={outfit.className}>
              <Header/>
              {children}
              <Footer/>
          </body>
      </ContextProvider>
      </html>

  )
}
