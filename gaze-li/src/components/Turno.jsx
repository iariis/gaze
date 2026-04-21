import { useState } from "react";
import "./Turno.css";

function Turno({ turno, eliminarTurno, editarTurno }) {
  const [editando, setEditando] = useState(false);
  const [nombreEdit, setNombreEdit] = useState(turno.paciente || turno.nombre);

  const handleSave = () => {
    editarTurno(turno.id, { paciente: nombreEdit, nombre: nombreEdit });
    setEditando(false);
  };

  return (
    <div className="card shadow-sm border-0 mb-3 turno-card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            {editando ? (
              <input 
                className="form-control form-control-sm mb-2" 
                value={nombreEdit} 
                onChange={(e) => setNombreEdit(e.target.value)} 
              />
            ) : (
              <h5 className="card-title mb-1 text-primary">{turno.paciente || turno.nombre}</h5>
            )}
            <p className="card-text mb-1 text-muted">
              <i className="bi bi-calendar-event me-2"></i>
              {turno.fecha || "Fecha en Agenda"} | {turno.hora || "Hora en Agenda"}
            </p>
            <span className="badge bg-soft-pink text-pink">{turno.servicio}</span>
          </div>
          <div className="btn-group">
            {editando ? (
              <button className="btn btn-sm btn-success" onClick={handleSave}>Guardar</button>
            ) : (
              <button className="btn btn-sm btn-outline-secondary" onClick={() => setEditando(true)}>
                Editar
              </button>
            )}
            <button className="btn btn-sm btn-outline-danger" onClick={() => eliminarTurno(turno.id)}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Turno;