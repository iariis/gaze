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

  const agregarCita = (nuevaCita) => {
    // Si viene del formulario de la página "Turnos"
    if (nuevaCita.fecha) {
      const fechaObj = new Date(nuevaCita.fecha + 'T00:00:00');
      let day = fechaObj.getDay();
      const diaIdx = day === 0 ? 6 : day - 1;
      const [h, m] = nuevaCita.hora.split(':').map(Number);
      const inicioIdx = (h - 9) + (m / 60);
      
      setCitas([...citas, {
        id: Date.now(),
        paciente: nuevaCita.nombre,
        servicio: nuevaCita.servicio,
        diaIdx,
        inicioIdx,
        duracion: 1 // Por defecto 1 hora
      }]);
    } else {
      // Si viene del click directo en la Agenda
      setCitas([...citas, { ...nuevaCita, id: Date.now() }]);
    }
  };

  const eliminarCita = (id) => {
    setCitas(citas.filter(c => c.id !== id));
  };

  const agregarCliente = (cliente) => {
    setClientes([...clientes, { ...cliente, id: Date.now() }]);
  };

  const renderContent = () => {
    switch(view) {
      case 'agenda': 
        return <Agenda citas={citas} agregarCita={agregarCita} />;
      case 'turnos': 
        return <ListaTurnos turnos={citas} agregarTurno={agregarCita} eliminarTurno={eliminarCita} />;
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