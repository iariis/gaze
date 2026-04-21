function Navbar({ setView, currentView }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">

        {/* LOGO */}
        <div 
          className="navbar-brand d-flex align-items-center" 
          style={{ cursor: 'pointer' }} 
          onClick={() => setView('agenda')}
        >
          <img src="https://img.icons8.com/ios/50/000000/eyelash.png" alt="Logo" width="30" height="30" className="me-2" />
          <span className="fw-bold fs-4">Gaze</span>
        </div>

        {/* BOTÓN MOBILE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <button 
                className={`nav-link btn border-0 ${currentView === 'agenda' ? 'active fw-bold' : ''}`} 
                onClick={() => setView('agenda')}
                data-bs-toggle="collapse" 
                data-bs-target=".navbar-collapse.show"
              >Agenda</button>
            </li>

            <li className="nav-item">
              <button 
                className={`nav-link btn border-0 ${currentView === 'turnos' ? 'active fw-bold' : ''}`} 
                onClick={() => setView('turnos')}
                data-bs-toggle="collapse" 
                data-bs-target=".navbar-collapse.show"
              >Turnos</button>
            </li>

            <li className="nav-item">
              <button 
                className={`nav-link btn border-0 ${currentView === 'clientes' ? 'active fw-bold' : ''}`} 
                onClick={() => setView('clientes')}
                data-bs-toggle="collapse" 
                data-bs-target=".navbar-collapse.show"
              >Clientes</button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;