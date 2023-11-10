import {Metadata} from "next";
import {Guitarra} from "../../components/Guitarra";
import styles from "../../styles/grid.module.css"
export const metadata={
    title: "Tienda Virtual",
    description: "Tienda de guitarras"
}
export default async function Tienda(){
    const guitarras = await getGuitarras();
    return(
        <main className={"contenedor"}>
            <div className={styles.grid}>
                {guitarras?.map(guitarra =>(
                    <Guitarra
                        key={guitarra.id}
                        guitarra={guitarra.attributes}
                    />
                ))}
            </div>
        </main>
    )
}

export async function getGuitarras() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const {data} = await respuesta.json();
    return data
}
