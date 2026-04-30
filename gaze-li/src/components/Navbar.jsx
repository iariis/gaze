import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";

function Navbar({ setView, currentView }) {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#f8bbd0', // Rosado pastel
        color: '#880e4f',          // Texto en tono cereza oscuro para contraste
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)' 
      }}
    >
      <Toolbar>

        {/* LOGO */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer", mr: 4 }}
          onClick={() => setView("agenda")}
        >
          <img
            src="https://img.icons8.com/ios/50/880e4f/eyelash.png"
            alt="Logo"
            width="30"
            style={{ marginRight: 8 }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Gaze
          </Typography>
        </Box>

        {/* BOTONES */}
        <Box sx={{ display: "flex", gap: 2 }}>

          <Button
            color="inherit"
            variant={currentView === "agenda" ? "outlined" : "text"}
            onClick={() => setView("agenda")}
            sx={{ 
              fontWeight: currentView === "agenda" ? 'bold' : 'normal',
              borderColor: '#880e4f' 
            }}
          >
            Agenda
          </Button>

          <Button
            color="inherit"
            variant={currentView === "turnos" ? "outlined" : "text"}
            onClick={() => setView("turnos")}
            sx={{ 
              fontWeight: currentView === "turnos" ? 'bold' : 'normal',
              borderColor: '#880e4f' 
            }}
          >
            Turnos
          </Button>

          <Button
            color="inherit"
            variant={currentView === "clientes" ? "outlined" : "text"}
            onClick={() => setView("clientes")}
            sx={{ 
              fontWeight: currentView === "clientes" ? 'bold' : 'normal',
              borderColor: '#880e4f' 
            }}
          >
            Clientes
          </Button>

        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;