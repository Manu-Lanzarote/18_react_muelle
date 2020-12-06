//En la lista de los barcos, haz que cada uno de ellos tenga un botón de añadir tripulante, y cuando se pulsa haz que se sume uno al número de tripulantes en el barco con el botón al que se le ha pulsado.

//Importo useState y creo un botón y la función anyadirTripulante

//MUY IMPORTANTE/ Recuerda cambiar el  "props.tripulantes"  del return por la variable de estado, (tripulante) !!!

import { useState } from "react";

function Main(props) {
  let [tripulante, setTripulante] = useState(props.tripulantes);
  function anyadirTripulante() {
    setTripulante(tripulante + 1);
  }
  //console.log(tripulante);
  return (
    <>
      <h2>{props.nombreBarco}</h2>
      <p>Eslora: {props.eslora}</p>
      <p>Tripulantes: {tripulante}</p>
      <button onClick={anyadirTripulante}>Añadir Tripulante</button>
      <p>. . .</p>
    </>
  );
}

export default Main;
