import React, { useState, useEffect } from "react";
import "./Agenda.css";

// Material UI
import { Box, Typography, Paper } from "@mui/material";

function Agenda({ citas, agregarCita }) {
  const horas = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"];
  const dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  const [currentPosition, setCurrentPosition] = useState(-1);

  useEffect(() => {
    const updatePosition = () => {
      const now = new Date();
      const startHour = 9;
      if (now.getHours() >= startHour && now.getHours() < 19) {
        setCurrentPosition((now.getHours() - startHour) * 60 + now.getMinutes());
      } else {
        setCurrentPosition(-1);
      }
    };
    updatePosition();
    const timer = setInterval(updatePosition, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleCellClick = (dIdx, hIdx) => {
    const nombre = prompt("Nombre del paciente:");
    if (!nombre) return;

    const servicio = prompt("Servicio:");

    agregarCita({
      id: Date.now(),
      paciente: nombre,
      servicio: servicio || "Consulta",
      diaIdx: dIdx,
      inicioIdx: hIdx,
      duracion: 1
    });
  };

  return (
    <Box className="agenda-container">

      {/* HEADER */}
      <Box className="header">
        <Box className="header-hora-empty"></Box>
        {dias.map((dia) => (
          <Typography key={dia} className="header-dia">
            {dia}
          </Typography>
        ))}
      </Box>

      {/* GRID */}
      <Box className="grid-cuerpo">

        {/* HORAS */}
        <Box className="hora-col">
          {horas.map((hora) => (
            <Typography key={hora} className="hora-slot">
              {hora}
            </Typography>
          ))}
        </Box>

        {/* DÍAS */}
        {dias.map((_, dIdx) => (
          <Box key={dIdx} className="dia-col">
            {horas.map((_, hIdx) => (
              <Box
                key={hIdx}
                className="celda"
                onClick={() => handleCellClick(dIdx, hIdx)}
              />
            ))}
          </Box>
        ))}

        {/* LÍNEA ACTUAL */}
        {currentPosition >= 0 && (
          <Box
            className="now-indicator"
            sx={{ top: `${currentPosition}px` }}
          />
        )}

        {/* CITAS */}
        {citas.map((cita) => (
          <Paper
            key={cita.id}
            elevation={3}
            className="cita"
            sx={{
              top: `${cita.inicioIdx * 60}px`,
              left: `calc(80px + (100% - 80px) / 7 * ${cita.diaIdx} + 2px)`,
              width: `calc((100% - 80px) / 7 - 4px)`,
              height: `${cita.duracion * 60}px`,
              position: "absolute",
              p: 1
            }}
          >
            <Typography variant="body2" noWrap>
              {cita.paciente}
            </Typography>
            <Typography variant="caption" noWrap>
              {cita.servicio}
            </Typography>
          </Paper>
        ))}

      </Box>
    </Box>
  );
}

export default Agenda;