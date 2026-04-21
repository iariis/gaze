import Turno from "./Turno";
import FormularioTurno from "./FormularioTurno";
import "./ListaTurnos.css";

function ListaTurnos({ turnos, agregarTurno, eliminarTurno, editarTurno }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm p-4 border-0 rounded-4">
            <FormularioTurno agregarTurno={agregarTurno} />
          </div>
        </div>
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold text-secondary">Gestión de Turnos</h2>
            <span className="badge bg-primary rounded-pill">{turnos.length} Turnos</span>
          </div>
          {turnos.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">No hay turnos agendados para este periodo.</p>
            </div>
          ) : (
            <div className="row">
              {turnos.map((turno) => (
                <div className="col-12" key={turno.id}>
                  <Turno 
                    turno={turno} 
                    eliminarTurno={eliminarTurno}
                    editarTurno={editarTurno}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListaTurnos;