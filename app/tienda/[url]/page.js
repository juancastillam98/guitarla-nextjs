
import {GuitarraInfo} from "../../../components/GuitarraInfo";
export default async function Producto({params}) {
    const {url}=params;
    const guitarra = await getGuitarra(url)
    return (
            <GuitarraInfo guitarra={guitarra}/>
        )

}

export async function generateStaticParams(){
    const respuesta= await fetch(`${process.env.API_URL}/guitarras`)
    const {data} = await respuesta.json();

    return data.map((guitarra) => ({
        url : guitarra.attributes.url,
    }))
}

async function getGuitarra(url) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data} = await  respuesta.json();
    return data;
}
