import React from "react";
 function Cards(props){
    return(
        
  <div class="col"><br />
    <div class="card">
      <img src={`props.imagen`} class="card-img-top" height={"200px"} width={"200px"} alt="Actualizacion"/>
      <div class="card-body">
        <h5 class="card-title">{props.titulo}</h5>
        <p class="card-text">{props.texto}</p>
      </div>
    </div>
  </div>
  

    );
 }
 export default Cards;