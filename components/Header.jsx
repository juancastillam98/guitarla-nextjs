'use client'
import Image from "next/image";
import logo from "@/public/img/logo.svg";
import carrito from "../public/img/carrito.png";
import Link from "next/link";
import styles from "../styles/header.module.css";
import {useRouter, usePathname, } from "next/navigation"
export const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            {/*Para evitar flash en imágenes, lo tenemos que hacer así. Si ponemos logo.src no es tan optimizado*/}
            <Link href={"/"}>
                <Image src={"/img/logo.svg"} width={300} height={40} alt={"Imagen de  logotipo"}/>
            </Link>
            <nav className={styles.navegacion}>
                {/*Los Link por defecto crean a los enlaces, pero el problema ees que no podemos añadirles clases css a los Link, por eso están los <a> dentro de los Linm*/}
                <Link href={"/"} className={pathname==="/" ? styles.active :""}>
                        Inicio
                </Link>
                <Link href={"/nosotros"} className={pathname==="/nosotros" ? styles.active :""}>
                    Nosotros
                </Link>
                <Link href={"/tienda"} className={pathname==="/tienda" ? styles.active :""}>
                    Tienda
                </Link>
                <Link href={"/blog"} className={pathname==="/blog" ? styles.active :""}>
                    Blog
                </Link>
                <Link href={"/carrito"} className={pathname==="/carrito" ? styles.active :""}>
                    <Image src={carrito} alt={"Carrtio"} width={30} height={25}/>
                </Link>
            </nav>
        </div>
    </header>
    )
}