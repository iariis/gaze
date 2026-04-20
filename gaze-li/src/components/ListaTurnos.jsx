import Turno from "./Turno";

function ListaTurnos({ turnos, eliminarTurno }) {
  return (
    <div>
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