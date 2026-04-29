import { useState } from "react";

// Material UI
import {
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  Chip,
  Stack
} from "@mui/material";

function Turno({ turno, eliminarTurno, editarTurno }) {
  const [editando, setEditando] = useState(false);
  const [nombreEdit, setNombreEdit] = useState(
    turno.paciente || turno.nombre
  );

  const handleSave = () => {
    editarTurno(turno.id, {
      paciente: nombreEdit,
      nombre: nombreEdit
    });
    setEditando(false);
  };

  return (
    <Paper elevation={2} sx={{ p: 2, mb: 2 }}>

      <Box display="flex" justifyContent="space-between" alignItems="flex-start">

        {/* INFO */}
        <Box>

          {editando ? (
            <TextField
              size="small"
              value={nombreEdit}
              onChange={(e) => setNombreEdit(e.target.value)}
              sx={{ mb: 1 }}
            />
          ) : (
            <Typography variant="h6" color="primary">
              {turno.paciente || turno.nombre}
            </Typography>
          )}

          <Typography variant="body2" color="text.secondary">
            {turno.fecha || "Fecha en Agenda"} | {turno.hora || "Hora en Agenda"}
          </Typography>

          <Chip
            label={turno.servicio}
            color="secondary"
            size="small"
            sx={{ mt: 1 }}
          />

        </Box>

        {/* BOTONES */}
        <Stack direction="row" spacing={1}>

          {editando ? (
            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={handleSave}
            >
              Guardar
            </Button>
          ) : (
            <Button
              size="small"
              variant="outlined"
              onClick={() => setEditando(true)}
            >
              Editar
            </Button>
          )}

          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={() => eliminarTurno(turno.id)}
          >
            Eliminar
          </Button>

        </Stack>

      </Box>
    </Paper>
  );
}

export default Turno;