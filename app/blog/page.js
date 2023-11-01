import {Metadata} from "next";
import {Post} from "../../components/Post";
import styles from "../../styles/grid.module.css";
export const metadata={
    title: "Blog",
    description: "Blog de música, venta de guitarras y consejos"
}
export default async function Blog(){
    const posts= await getPosts();
    return(
        <main className={"contenedor"}>
            <h1 className={"heading"}>Blog</h1>
                <div className={styles.grid}>
                    {posts?.map(post =>(
                        <Post
                            key={post.id}
                            post={post.attributes}
                        />
                    ))}
                </div>

        </main>
    )
}

export async function getPosts() {
    const respuesta = await fetch("http://localhost:1337/api/posts?populate=imagen");
    const {data} = await respuesta.json();
    return data;
}
