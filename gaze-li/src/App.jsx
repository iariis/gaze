import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Agenda from './components/Agenda';
import ListaTurnos from './components/ListaTurnos';
import Clientes from './components/Clientes';
import './components/Agenda.css';

function App() {
  const [view, setView] = useState('agenda');
  const [citas, setCitas] = useState([
    { id: 1, paciente: "Juan Pérez", servicio: "Extensiones", diaIdx: 1, inicioIdx: 2, duracion: 1.5 }
  ]);
  const [clientes, setClientes] = useState([
    { id: 1, nombre: "Juan Pérez", telefono: "12345678", email: "juan@mail.com" }
  ]);
 // Si viene del formulario (trae fecha en formato YYYY-MM-DD) y no tiene diaIdx
  const agregarCita = (nuevaCita) => {    // Si viene del formulario (trae fecha en formato YYYY-MM-DD) y no tiene diaIdx
    if (nuevaCita.fecha && nuevaCita.diaIdx === undefined) {
      const fechaObj = new Date(nuevaCita.fecha + 'T00:00:00');
      let day = fechaObj.getDay();
      const diaIdx = day === 0 ? 6 : day - 1;
      const [h, m] = nuevaCita.hora.split(':').map(Number);
      const inicioIdx = (h - 9) + (m / 60);
      
      setCitas([...citas, {
        ...nuevaCita,
        id: Date.now(),
        paciente: nuevaCita.nombre, // Unificamos el campo nombre del form a paciente
        diaIdx,
        inicioIdx,
      }]);
    } else {
      // Si viene de la Agenda o ya está procesado
      setCitas([...citas, { ...nuevaCita, id: Date.now() }]);
    }
  };

  const eliminarCita = (id) => {
    setCitas(citas.filter(c => c.id !== id));
  };

  const editarCita = (id, nuevosDatos) => {
    setCitas(citas.map(c => c.id === id ? { ...c, ...nuevosDatos } : c));
  };

  const agregarCliente = (cliente) => {
    setClientes([...clientes, { ...cliente, id: Date.now() }]);
  };

  const renderContent = () => {
    switch(view) {
      case 'agenda': 
        return <Agenda citas={citas} agregarCita={agregarCita} />;
      case 'turnos': 
        return <ListaTurnos turnos={citas} agregarTurno={agregarCita} eliminarTurno={eliminarCita} editarTurno={editarCita} />;
      case 'clientes': 
        return <Clientes clientes={clientes} agregarCliente={agregarCliente} />;
      default: 
        return <Agenda citas={citas} agregarCita={agregarCita} />;
    }
  };

  return (
    <>
      <Navbar setView={setView} currentView={view} />
      <div className="container-fluid mt-4">
        {renderContent()}
      </div>
    </>
  );
}

export default App;