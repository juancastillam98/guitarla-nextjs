import styles from '../../../styles/blog.module.css'
import {formatearFecha} from "../../../utils/helpers"
import Image from "next/image";

export const metadata ={
    title :" Blog",
    description :"Blog de música, venta de guitarras y consejos"
}
export default async function Post({params}){
    const {url}=params;
    const post = await getPost(url)
    const {titulo, contenido, publishedAt, imagen}=post[0].attributes
    return(
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



export async function generateStaticParams() {
    const {data} = await fetch('http://localhost:1337/api/posts').then((res) => res.json())
    //console.log(data)
    return data.map((post) => ({
        url: post.attributes.url,
    }))
}

export async function getPost(url){
    const resultado = await fetch(`http://localhost:1337/api/posts?filters[url]=${url}&populate=imagen`);
    const {data} = await resultado.json();
    return data;
}