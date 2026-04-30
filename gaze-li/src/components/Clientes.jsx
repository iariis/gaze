import React, { useState } from "react";

// Material UI
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";

function Clientes({ clientes, agregarCliente }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre) return;

    agregarCliente({
      ...form,
      id: Date.now()
    });

    setForm({ nombre: "", telefono: "", email: "" });
  };

  return (
    <Grid container spacing={2}>

      {/* FORMULARIO */}
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Nuevo Cliente
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              fullWidth
              margin="normal"
              value={form.nombre}
              onChange={(e) =>
                setForm({ ...form, nombre: e.target.value })
              }
            />

            <TextField
              label="Teléfono"
              fullWidth
              margin="normal"
              value={form.telefono}
              onChange={(e) =>
                setForm({ ...form, telefono: e.target.value })
              }
            />

            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Guardar Cliente
            </Button>
          </Box>
        </Paper>
      </Grid>

      {/* LISTA */}
      <Grid item xs={12} md={8}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Lista de Clientes
          </Typography>

          {clientes.length === 0 ? (
            <Typography>No hay clientes todavía</Typography>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Teléfono</TableCell>
                  <TableCell>Email</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {clientes.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>{c.nombre}</TableCell>
                    <TableCell>{c.telefono}</TableCell>
                    <TableCell>{c.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Paper>
      </Grid>

    </Grid>
  );
}

export default Clientes;