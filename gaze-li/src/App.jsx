import Navbar from "./components/Navbar";
import FormularioTurno from "./components/FormularioTurno";
import ListaTurnos from "./components/ListaTurnos";
function App() {
  return (
    <>
     <Navbar />
     <FormularioTurno />
     <ListaTurnos turnos={turnos} />
    
    </>
  );
}

export default App;n