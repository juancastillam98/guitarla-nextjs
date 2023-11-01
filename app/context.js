'use client'

import {createContext, useEffect, useState} from 'react'

export const Context = createContext({})


export default function ContextProvider({ children }) {
    const carritoLS = typeof window !== "undefined" ? JSON.parse( localStorage.getItem('carrito')) ?? [] :[];//Tanto si el carrito no existe, va a crear un array vacío.
    const [carrito, setCarrito] =useState(carritoLS);
    const [paginaLista, setPaginaLista] = useState(false)
    //vamos a sincronizar el carrito con localStorage para hacer el carrito persistente
    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(carrito));
        console.log("desde useEffect")
    },[carrito])

    /*
    Este segundo useEffect es para evitar el error de UI. El cual ocurre porque al principio, al cargar la página coge datos del localStorage (server) y los muestra en la página (cliente). Si el cliente tiene información y el server no, hay un desfase por así decirlo, porque next js se ejecuta tanto en el cliente como en el servidor. Y la información la obtiene del servidor. Entonces si la información la obtiene del servidor, y al pricipio está mostrando información pero en el servidor no hay nada, de donde obteine la información. Eso es el error UI */
    useEffect(()=>{
        setPaginaLista(true) //si la página está lista, devolverá un true
    }, [])
    const agregarCarrito = guitarra => {
        // Comprobar si la guitarra ya esta en el carrito...
        if(carrito.some( guitarraState =>  guitarraState.id === guitarra.id )) {
            // Iterar para actualizar la cantidad
            const carritoActualizado = carrito.map( guitarraState => {
                if( guitarraState.id === guitarra.id ) {
                    guitarraState.cantidad = guitarra.cantidad;
                }
                return guitarraState;
            });
            // Se asigna al array
            setCarrito([...carritoActualizado]);
            localStorage.setItem('carrito', JSON.stringify( carrito ));
        } else {
            // En caso de que el articulo no exista, es nuevo y se agrega
            setCarrito([...carrito, guitarra]);
            localStorage.setItem('carrito', JSON.stringify( carrito ));
        }
    }

    const eliminarProducto = id => {
        const carritoActualizado = carrito.filter( producto => producto.id != id)
        setCarrito(carritoActualizado)
        window.localStorage.setItem('carrito', JSON.stringify( carrito ));
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map( guitarraState => {
            if(guitarraState.id === guitarra.id ) {
                guitarraState.cantidad = parseInt( guitarra.cantidad )
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
        window.localStorage.setItem('carrito', JSON.stringify( carrito ));
    }

    return (
        <Context.Provider value={ paginaLista ? {carrito, agregarCarrito, eliminarProducto, actualizarCantidad} : null}>
            {children}
        </Context.Provider>
        )

}