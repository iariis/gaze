import { useState } from "react";
import Navbar from "./components/Navbar";
import FormularioTurno from "./components/FormularioTurno";
import ListaTurnos from "./components/ListaTurnos";

function App() {
  const [turnos, setTurnos] = useState([]);

  return (
    <>
      <Navbar />
      <FormularioTurno />
      <ListaTurnos turnos={turnos} />
    </>
  );
}

export default App;