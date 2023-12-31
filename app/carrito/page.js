"use client"
import {useEffect, useState} from "react";
import Image from "next/image";
import {Context} from "../context"
import { useContext } from "react";
import styles from '@/styles/carrito.module.css'
/*export const metadata={
    title: 'Carrito',
    description: 'Compra'
}*/
export default function Carrito() {
    const context = useContext(Context);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Verificar si context está disponible antes de realizar operaciones
        if (context && context.carrito) {
            const calculoTotal = context.carrito.reduce(
                (acumulado, elementoIterado) =>
                    acumulado + elementoIterado.cantidad * elementoIterado.precio,
                0
            );
            setTotal(calculoTotal);
        }
    }, [context]);

    if (!context) {
        // Manejar el caso cuando el contexto es nulo (por ejemplo, aún no está listo)
        return <div>Cargando...</div>;
    }

    const { carrito, actualizarCantidad, eliminarProducto } = context;
    return(
        <>
            <main className={"contenedor"}>
                <h1 className={"heading"}>Carrito</h1>
                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Artículos</h2>
                        {carrito.length === 0 ? "Carrito Vacío" : (
                            carrito.map((producto)=>(
                                <div key={producto.id} className={styles.producto}>
                                    <div>
                                        <Image src={producto.imagen} width={250} height={480} alt={producto.nombre}/>
                                    </div>
                                    <div>
                                        <p className={styles.nombre}>{producto.nombre}</p>
                                        <div className={styles.cantidad}>
                                            <p>Cantidad:</p>
                                            <select className={styles.select}
                                                    onChange={ (e)=>
                                                        actualizarCantidad({
                                                            id: producto.id,
                                                            cantidad: e.target.value
                                                        })}
                                                    value={producto.cantidad}
                                            >
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                            </select>
                                        </div>
                                        <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                        <p className={styles.subtotal}>$<span>{producto.cantidad * producto.precio}</span></p>
                                    </div>
                                    <button
                                        className={styles.eliminar}
                                        type={"button"}
                                        onClick={()=>eliminarProducto(producto.id)}
                                    >
                                        X
                                    </button>
                                </div>

                            ))
                        )}
                    </div>
                    <aside className={styles.resumen}>
                        <h3>Resumen del Pedido:</h3>
                        <p>Total a pagar: ${total}</p>
                    </aside>
                </div>
            </main>
        </>
    )
}