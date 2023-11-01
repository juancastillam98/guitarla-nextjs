import Document, {Html, Head, Main, NextScript} from "next/document"
import Link from "next/link";

class MyDocument extends Document{//compoente que nos permite acceder a todos los elementos de la página
    render() {
        return (
            <Html>
                <Head>
                    <meta name={"description"} content={"GuitarLA - Venta de guitarras y blog de música"}/>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
                    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
                    <Link href={"stylesheet"} hrefLang={"https://necolas.github.io/normalize.css/8.0.1/normalize.css"}/>
                </Head>
                <body>
                <Main />
                <NextScript/>
                </body>
            </Html>
        )
    }

}
export  default MyDocument