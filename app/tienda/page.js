import {Metadata} from "next";
import {Guitarra} from "../../components/Guitarra";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import styles from "../../styles/grid.module.css"
export const metadata={
    title: "Tienda Virtual",
    description: "Tienda de guitarras"
}
export default async function Tienda(){//lo estoy extrayendo en getStaticProps
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

async function getGuitarras() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const {data} = await respuesta.json();
    if (!respuesta.ok) {
        throw new Error('Failed to fetch data')
    }
    return data
}

//getStaticProps y getServerSideProps ya no se usa en Next 13, lo que se usa es generateStaticParams
/*
export async function generateStaticParams(){//getStaticProps es un consulta stática, no va a ser dinámica. Como por ejemplo listar todas las guitaras de strapi
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const {data: guitarras} = await respuesta.json();//estoy extrayendo data y renombrando por guitarras
    //console.log(guitarras);
    return {
        props: {
            guitarras
        }
    }
}
*/
/*
export async function getStaticProps(){//getStaticProps es un consulta stática, no va a ser dinámica. Como por ejemplo listar todas las guitaras de strapi
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const {data: guitarras} = await respuesta.json();//estoy extrayendo data y renombrando por guitarras
    //console.log(guitarras);
    return {
        props: {
            guitarras
        }
    }
}
*/