import { useState } from "react";
import Navbar from "./components/Navbar";
import FormularioTurno from "./components/FormularioTurno";
import ListaTurnos from "./components/ListaTurnos";
function App() {
  const [turnos, setTurnos] = useState([]);

  function agregarTurno(turno) {
    setTurnos([...turnos, turno]);
  }
  function eliminarTurno(index) {
  const nuevosTurnos = turnos.filter((_, i) => i !== index);
  setTurnos(nuevosTurnos);
}
  return (
    <>
      <Navbar />
      <FormularioTurno agregarTurno={agregarTurno} />
      <ListaTurnos turnos={turnos} eliminarTurno={eliminarTurno} />
    </>
  );
}
export default App;