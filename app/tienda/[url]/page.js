//import {useState} from "react";
import styles from "@/styles/guitarras.module.css";
import Image from "next/image";
//import InfoGuitarra from "./guitarra";
import {GuitarraInfo} from "../../../components/GuitarraInfo";
export default async function Producto({params}) {
    //const [cantidad, setCantidad] = useState(0)
    const {url}=params;
    const guitarra = await getGuitarra(url)
    //const {descripcion, nombre,precio, imagen} = guitarra[0].attributes;
    return (

            <GuitarraInfo guitarra={guitarra}/>

        )

}

export async function generateStaticParams(){
    const respuesta= await fetch('http://localhost:1337/api/guitarras');
    const {data} = await respuesta.json();

    return data.map((guitarra) => ({
        url : guitarra.attributes.url,
    }))
}

async function getGuitarra(url) {
    const respuesta = await fetch(`http://localhost:1337/api/guitarras?filters[url]=${url}&populate=imagen`)
    const {data} = await  respuesta.json();
    return data;
}
