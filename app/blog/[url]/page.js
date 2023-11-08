
import {BlogInfo} from "../../../components/BlogInfo";
import {console} from "next/dist/compiled/@edge-runtime/primitives";
export const metadata ={
    title :" Blog",
    description :"Blog de música, venta de guitarras y consejos"
}
export default async function Post({params}){
    const {url}=params;
    const post = await getPost(url)
    console.log("desde Post params")
    console.log(post)

    //const {titulo, contenido, publishedAt, imagen}=post[0].attributes
    return(
        <BlogInfo post={post} />
    )
}



export async function generateStaticParams() {
    const {data} = await fetch(`${process.env.API_URL}/posts`).then((res) => res.json())
    //console.log(data)
    return data.map((post) => ({
        url: post.attributes.url,
    }))
}

export async function getPost(url){
    const resultado = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
    const {data} = await resultado.json();
    return data;
}