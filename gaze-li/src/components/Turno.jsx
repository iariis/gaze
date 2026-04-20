function Turno({ turno, index, eliminarTurno }) {
  return (
    <div>
      <p><strong>Nombre:</strong> {turno.nombre}</p>
      <p><strong>Fecha:</strong> {turno.fecha}</p>
      <p><strong>Hora:</strong> {turno.hora}</p>
      <p><strong>Servicio:</strong> {turno.servicio}</p>

      <button onClick={() => eliminarTurno(index)}>
        Eliminar
      </button>
      <button onClick={() => alert("Editar próximamente")}>
        Editar
      </button>
    </div>
  );
}

export default Turno;