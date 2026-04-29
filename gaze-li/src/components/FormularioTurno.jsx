import { useState } from "react";

// Material UI
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Paper
} from "@mui/material";

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

    if (!form.nombre || !form.fecha || !form.hora || !form.servicio) {
      alert("Completa todos los campos");
      return;
    }

    agregarTurno({
      ...form,
      id: Date.now()
    });

    setForm({
      nombre: "",
      fecha: "",
      hora: "",
      servicio: "",
    });
  }

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 400, margin: "20px auto" }}>
      <Typography variant="h6" gutterBottom>
        Reservar turno
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>

        <TextField
          label="Nombre del cliente"
          name="nombre"
          fullWidth
          margin="normal"
          value={form.nombre}
          onChange={handleChange}
        />

        <TextField
          type="date"
          name="fecha"
          fullWidth
          margin="normal"
          value={form.fecha}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          type="time"
          name="hora"
          fullWidth
          margin="normal"
          value={form.hora}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          select
          label="Servicio"
          name="servicio"
          fullWidth
          margin="normal"
          value={form.servicio}
          onChange={handleChange}
        >
          <MenuItem value="">Seleccionar servicio</MenuItem>
          <MenuItem value="lifting">Lifting</MenuItem>
          <MenuItem value="volumen">Volumen</MenuItem>
          <MenuItem value="clasicas">Clásicas</MenuItem>
        </TextField>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          Guardar turno
        </Button>

      </Box>
    </Paper>
  );
}

export default FormularioTurno;