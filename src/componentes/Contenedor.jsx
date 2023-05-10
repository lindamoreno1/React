import React from "react";
import Cards from "./Cards";
function Contenedor(){
    return(
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <Cards titulo="ACTUALIZACION" texto="Nuestro equipo veterinario está en constante renovación mediante formaciones periódicas en las que mantenerse al día de las nuevas técnicas y patologías descubiertas."/>
            <Cards titulo="MAXIMA CALIDAD" texto="Todos nuestros procedimientos, técnicas, materiales y productos son de primera calidad, para poder dar el servicio que tu mascota merece."/>
        </div>
    );
}
export default Contenedor;