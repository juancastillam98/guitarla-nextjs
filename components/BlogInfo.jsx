"use client"
import styles from "../styles/blog.module.css";
import Image from "next/image";
import {formatearFecha} from "@/utils/helpers";
export const BlogInfo = ({post}) => {
    const {titulo, contenido, publishedAt, imagen}=post[0].attributes;
    console.log("ele titulo "+titulo)
    return (
        <article className={`${styles.post} ${styles["mt-3"]}`}>
            <Image src={imagen.data.attributes.url} width={1000} height={400} alt={`imagen blog ${titulo}`}/>
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.texto}>{contenido}</p>
            </div>
        </article>
    )
}