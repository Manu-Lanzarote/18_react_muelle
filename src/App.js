// Muestra el nombre del muelle en un componente Cabecera,
//la lista de barcos en un componente Main
//y el teléfono de contacto en un componente Footer.

//En la lista de los barcos, haz que cada uno de ellos tenga un botón de añadir tripulante, y cuando se pulsa haz que se sume uno al número de tripulantes en el barco con el botón al que se le ha pulsado.

import "./App.css";
import muelle from "./muelle";
import Cabecera from "./Cabecera";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const mostrarBarcos = muelle.barcos.map(function (barco) {
    return (
      <>
        <Cabecera nombreMuelle={muelle.nombre} />

        <Main
          key={barco.nombreBarco}
          nombreBarco={barco.nombre}
          eslora={barco.eslora}
          tripulantes={barco.tripulantes}
        />

        <Footer telefono={muelle.contacto.telefono} />
      </>
    );
  });
  return mostrarBarcos;
}

export default App;
