"use client"
import {useState} from "react";
import styles from "@/styles/guitarras.module.css";
import Image from "next/image";
import { useContext } from "react";
//import {Context} from "@/app/layout";
import { Context } from "../app/context";

export const GuitarraInfo = ({guitarra}) =>{
    const { agregarCarrito } = useContext(Context);
    if (!context) {
        // Manejar el caso cuando el contexto es nulo (por ejemplo, aún no está listo)
        return <div>Cargando...</div>;
    }
    const [cantidad, setCantidad] = useState(0)
    const {descripcion, nombre,precio, imagen} = guitarra[0].attributes;


    const handleSubmit = e => {
        console.log("has clicado en submit")
        e.preventDefault();
        if (cantidad < 1){
            alert("Cantidad no válida");
            return;
        }
        const guitarraSeleccionada={
            id: guitarra[0].id,
            imagen:imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
    agregarCarrito(guitarraSeleccionada);
    }
    return (
        <div className={styles.guitarra}>
            <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen de la guitarra ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p>Cantidad inicial: {cantidad}</p>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>{precio}</p>
                <form
                    className={styles.formulario}
                    onSubmit={handleSubmit}
                >
                    <label htmlFor={"cantidad"} >Canitdad</label>
                    <select name={""} id={"cantidad"}
                        onChange={ (e)=> (setCantidad(e.target.value))}>
                        <option value={0}>--Selecciona--</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <input type={"submit"} value={"Agregar al carrito"}/>
                </form>
            </div>
        </div>
    )
}





