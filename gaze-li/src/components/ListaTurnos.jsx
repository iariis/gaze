import Turno from "./Turno";
import "./ListaTurnos.css";
function ListaTurnos({ turnos, eliminarTurno }) {
  return (
    <div className="lista-turnos">
      <h2>Turnos agendados</h2>

      {turnos.length === 0 ? (
        <p>No hay turnos todavía</p>
      ) : (
        turnos.map((turno, index) => (
          <Turno 
            key={index} 
            turno={turno} 
            index={index}
            eliminarTurno={eliminarTurno}
          />
        ))
      )}
    </div>
  );
}

export default ListaTurnos;