import { useState } from "react";
import Navbar from "./components/Navbar";
import FormularioTurno from "./components/FormularioTurno";
import ListaTurnos from "./components/ListaTurnos";
<<<<<<< HEAD
=======

>>>>>>> 5c8cbcbc0a469c4e837619e301bc00e386ae382e
function App() {
  const [turnos, setTurnos] = useState([]);

  return (
    <>
<<<<<<< HEAD
     <Navbar />
     <FormularioTurno />
     <ListaTurnos turnos={turnos} />
    
=======
      <Navbar />
      <FormularioTurno />
      <ListaTurnos turnos={turnos} />
>>>>>>> 5c8cbcbc0a469c4e837619e301bc00e386ae382e
    </>
  );
}

export default App;n