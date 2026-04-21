import React, { useState } from 'react';

function Clientes({ clientes, agregarCliente }) {
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre) return;
    agregarCliente(form);
    setForm({ nombre: '', telefono: '', email: '' });
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card p-3 shadow-sm">
          <h5>Nuevo Cliente</h5>
          <form onSubmit={handleSubmit}>
            <input 
              className="form-control mb-2" 
              placeholder="Nombre" 
              value={form.nombre}
              onChange={e => setForm({...form, nombre: e.target.value})}
            />
            <input 
              className="form-control mb-2" 
              placeholder="Teléfono" 
              value={form.telefono}
              onChange={e => setForm({...form, telefono: e.target.value})}
            />
            <input 
              className="form-control mb-2" 
              placeholder="Email" 
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
            />
            <button className="btn btn-primary w-100">Guardar Cliente</button>
          </form>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card p-3 shadow-sm">
          <h5>Lista de Clientes</h5>
          <table className="table">
            <thead>
              <tr><th>Nombre</th><th>Teléfono</th><th>Email</th></tr>
            </thead>
            <tbody>
              {clientes.map(c => (
                <tr key={c.id}><td>{c.nombre}</td><td>{c.telefono}</td><td>{c.email}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Clientes;