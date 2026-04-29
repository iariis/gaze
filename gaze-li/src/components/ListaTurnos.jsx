import Turno from "./Turno";
import FormularioTurno from "./FormularioTurno";

// Material UI
import {
  Grid,
  Paper,
  Typography,
  Box,
  Chip
} from "@mui/material";

function ListaTurnos({ turnos, agregarTurno, eliminarTurno, editarTurno }) {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>

      {/* FORMULARIO */}
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <FormularioTurno agregarTurno={agregarTurno} />
        </Paper>
      </Grid>

      {/* LISTA */}
      <Grid item xs={12} md={8}>
        
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">
            Gestión de Turnos
          </Typography>

          <Chip 
            label={`${turnos.length} Turnos`} 
            color="primary" 
          />
        </Box>

        {/* CONTENIDO */}
        {turnos.length === 0 ? (
          <Box textAlign="center" py={5}>
            <Typography color="text.secondary">
              No hay turnos agendados para este periodo.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={2}>
            {turnos.map((turno) => (
              <Grid item xs={12} key={turno.id}>
                <Turno
                  turno={turno}
                  eliminarTurno={eliminarTurno}
                  editarTurno={editarTurno}
                />
              </Grid>
            ))}
          </Grid>
        )}

      </Grid>
    </Grid>
  );
}

export default ListaTurnos;