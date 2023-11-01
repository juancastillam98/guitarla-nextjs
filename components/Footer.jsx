import Image from "next/image";
import logo from "../public/img/logo.svg"
import styles from "../styles/footer.module.css";
import Link from "next/link";
export const Footer = () => {
    return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navegacion}>
                {/*Los Link por defecto crean a los enlaces, pero el problema ees que no podemos añadirles clases css a los Link, por eso están los <a> dentro de los Linm*/}
                <Link href={"/"}>
                    Inicio
                </Link>
                <Link href={"/nosotros"} >
                    Nosotros
                </Link>
                <Link href={"/tienda"} >
                    Tienda
                </Link>
                <Link href={"/blog"}>
                    Blog
                </Link>

            </nav>
            <p className={styles.copyright}>
                Todos los dereechos reservados {new Date().getFullYear()}
            </p>
        </div>
    </footer>
    )
}