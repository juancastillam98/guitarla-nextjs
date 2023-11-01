import Link from "next/link";
export const metadata={
    title: "Página no encontrada",
    description: "Tienda de guitarras"
}
export default function NotFound(){
    return (
        <section>
            <p className={"error"}>Página no encontrada</p>
            <Link href={"/"} className={"error-enlace"}>Volver</Link>
        </section>
    )
}