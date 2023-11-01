import {Metadata} from "next";
import Image from "next/image"
import nosotrosjpg from "../../public/img/nosotros.jpg"
import styles from "../../styles/nosotros.module.css";
export const metadata={
    title: "Nostros",
    description: "Apartado de nosotros"
}
export  default function Nosotros(){
    return(
        //si no le ponemos el styles.contenedor, va a coger los estilos globales*/
       <main className={"contenedor"}>
           <h1 className={"heading"}>Sobre Nosotros</h1>
           <div className={styles.contenido}>
               <Image src={nosotrosjpg} width={1000} height={800} alt={"Imagen de sobre nosotros"}/>
               <div>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et lacus tortor. Curabitur laoreet scelerisque turpis et hendrerit. Vivamus volutpat, nisl id congue dictum, tellus orci finibus nunc, nec luctus magna augue et nibh. Praesent at nibh sodales, tempor augue vitae, blandit sem. Maecenas consequat magna eget nunc vestibulum, tincidunt fringilla felis luctus. Nam in sagittis diam. Proin porta lacus vel tristique rhoncus. Quisque suscipit, mauris vel fringilla tempus, dolor odio placerat augue, laoreet ultrices massa libero congue lorem. Etiam at placerat ligula, eu tristique diam. Fusce faucibus egestas venenatis. Proin massa turpis, varius ut ex eget, sollicitudin dictum dolor. Donec vehicula dapibus condimentum. Nullam commodo est leo, ut vulputate enim sagittis a. Sed in lectus eget ligula pharetra rutrum. </p>


                   <p>Fusce quam dolor, congue sed placerat ac, pellentesque tincidunt dui. Aenean facilisis orci tempus purus aliquet, bibendum rutrum tellus porta. In vitae facilisis ante, ut tempor nunc. Nam eu convallis quam. Fusce semper congue elit sit amet sollicitudin. Praesent et mauris orci. Quisque at venenatis ligula. Sed urna magna, pharetra eget porta eget, elementum non ipsum. Nunc erat urna, cursus nec rutrum eget, rhoncus eget purus. Nam sagittis sapien id lacus lacinia pellentesque. Nulla eu pellentesque libero. Ut sit amet vulputate metus, sit amet vulputate magna.</p>
               </div>
           </div>
       </main>
    )
}