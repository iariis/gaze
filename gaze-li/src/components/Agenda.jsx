import React, { useState, useEffect } from 'react';
import './Agenda.css';

function Agenda({ citas, agregarCita }) {
  const horas = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
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
      paciente: nombre,
      servicio: servicio || "Consulta",
      diaIdx: dIdx,
      inicioIdx: hIdx,
      duracion: 1
    });
  };

  return (
    <div className="agenda-container">
      {/* HEADER */}
      <div className="header">
        <div className="header-hora-empty"></div>
        {dias.map(dia => (
          <div key={dia} className="header-dia">{dia}</div>
        ))}
      </div>

      {/* CUERPO DEL GRID */}
      <div className="grid-cuerpo">
        <div className="hora-col">
          {horas.map(hora => (
            <div key={hora} className="hora-slot">{hora}</div>
          ))}
        </div>

        {dias.map((_, dIdx) => (
          <div key={dIdx} className="dia-col">
            {horas.map((_, hIdx) => (
              <div 
                key={hIdx} 
                className="celda" 
                onClick={() => handleCellClick(dIdx, hIdx)}
              ></div>
            ))}
          </div>
        ))}

        {/* LÍNEA DE TIEMPO ACTUAL */}
        {currentPosition >= 0 && (
          <div className="now-indicator" style={{ top: `${currentPosition}px` }} />
        )}

        {/* RENDERIZADO DE CITAS */}
        {citas.map(cita => (
          <div 
            key={cita.id}
            className="cita"
            style={{
              top: `${cita.inicioIdx * 60}px`, 
              left: `calc(80px + (100% - 80px) / 7 * ${cita.diaIdx} + 2px)`,
              width: `calc((100% - 80px) / 7 - 4px)`,
              height: `${cita.duracion * 60}px`
            }}
          >
            <div className="cita-paciente text-truncate">{cita.paciente}</div>
            <div className="cita-servicio text-truncate small">{cita.servicio}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Agenda;