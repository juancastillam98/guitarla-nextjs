
import Image from 'next/image'
import Link from 'next/link'
import {Guitarra} from "../components/Guitarra";
import {Post} from "../components/Post";
import {Curso} from "../components/Curso";
import styles from '../styles/grid.module.css'
import {fetch} from "next/dist/compiled/@edge-runtime/primitives";
export  const metadata ={
    title : 'Inicio',
    description : 'Tienda de música',
}

export default async function Home() {
    const {guitarras, posts, curso}=await getGuitarrasPost();

  return (
      <>
          <main className={"contenedor"}>
              <h1 className={"heading"}>Nuestra colección</h1>
              <div className={styles.grid}>
                  {guitarras?.map(guitarra=>(
                      <Guitarra
                          key={guitarra.id}
                          guitarra={guitarra.attributes}
                      />
                  ))}
              </div>
          </main>
          <Curso curso={curso.attributes}/>
          <section className={"contenedor"}>
              <h2 className={"heading"}>Blog</h2>
              <div className={styles.grid}>
                  {posts?.map(post=>(
                      <Post
                          key={post.id}
                          post={post.attributes}
                      />
                  ))}
              </div>
          </section>
      </>

  )
}
export async function getGuitarrasPost(){
    const urlGuitarras ="http://localhost:1337/api/guitarras?populate=imagen";
    const urlPost ="http://localhost:1337/api/posts?populate=imagen";
    const urlCurso ="http://localhost:1337/api/curso?populate=imagen";
    const [resGuitarras, resPost, resCurso] = await Promise.all([
        fetch(urlGuitarras),
        fetch(urlPost),
        fetch(urlCurso)
    ]);
    const [ guitarras, post, curso]=await Promise.all([resGuitarras.json(), resPost.json(), resCurso.json()]);//estoy extrayendo data de guitarras
    return {
        guitarras: guitarras.data,
        posts: post.data,
        curso: curso.data
    }
}