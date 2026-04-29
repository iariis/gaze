import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";

function Navbar({ setView, currentView }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>

        {/* LOGO */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer", mr: 4 }}
          onClick={() => setView("agenda")}
        >
          <img
            src="https://img.icons8.com/ios/50/ffffff/eyelash.png"
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
          >
            Agenda
          </Button>

          <Button
            color="inherit"
            variant={currentView === "turnos" ? "outlined" : "text"}
            onClick={() => setView("turnos")}
          >
            Turnos
          </Button>

          <Button
            color="inherit"
            variant={currentView === "clientes" ? "outlined" : "text"}
            onClick={() => setView("clientes")}
          >
            Clientes
          </Button>

        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;