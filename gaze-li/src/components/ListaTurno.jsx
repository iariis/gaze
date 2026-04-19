function Turno({ turno }) {
  return (
    <div>
      <p><strong>Nombre:</strong> {turno.nombre}</p>
      <p><strong>Fecha:</strong> {turno.fecha}</p>
      <p><strong>Hora:</strong> {turno.hora}</p>
      <p><strong>Servicio:</strong> {turno.servicio}</p>

      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  );
}

export default Turno;