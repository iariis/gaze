import { useState } from "react";
import "./FormularioTurno.css";
function FormularioTurno({ agregarTurno }) {
  const [form, setForm] = useState({
    nombre: "",
    fecha: "",
    hora: "",
    servicio: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // validación simple
    if (!form.nombre || !form.fecha || !form.hora || !form.servicio) {
      alert("Completa todos los campos");
      return;
    }

    agregarTurno(form);

    // limpiar formulario
    setForm({
      nombre: "",
      fecha: "",
      hora: "",
      servicio: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reservar turno</h2>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre del cliente"
        value={form.nombre}
        onChange={handleChange}
      />

      <input
        type="date"
        name="fecha"
        value={form.fecha}
        onChange={handleChange}
      />

      <input
        type="time"
        name="hora"
        value={form.hora}
        onChange={handleChange}
      />

      <select
        name="servicio"
        value={form.servicio}
        onChange={handleChange}
      >
        <option value="">Seleccionar servicio</option>
        <option value="lifting">Lifting</option>
        <option value="volumen">Volumen</option>
        <option value="clasicas">Clásicas</option>
      </select>

      <button type="submit">Guardar turno</button>
    </form>
  );
}

export default FormularioTurno;