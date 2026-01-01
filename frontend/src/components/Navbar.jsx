// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   if (!user) return null;

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography sx={{ flexGrow: 1 }}>
//           Knit Finance Dashboard
//         </Typography>
//         <Button color="inherit" onClick={logout}>
//           Logout
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <AppBar
      position="static"
      elevation={6}
      sx={{
        background: "linear-gradient(135deg,#1e3c72,#2a5298)",
        borderBottom: "1px solid rgba(255,255,255,0.25)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* LEFT TITLE */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            letterSpacing: 0.5,
            cursor: "pointer",
          }}
          onClick={() => navigate("/dashboard")}
        >
          Knit Finance
        </Typography>

        {/* RIGHT PROFILE + LOGOUT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* PROFILE */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              px: 2,
              py: 0.8,
              borderRadius: 3,
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#ffffff",
                color: "#1e3c72",
                width: 34,
                height: 34,
                fontWeight: 700,
              }}
            >
              {user.name?.charAt(0).toUpperCase()}
            </Avatar>

            <Box>
              <Typography sx={{ fontSize: "0.9rem", fontWeight: 600 }}>
                {user.name}
              </Typography>
              <Typography sx={{ fontSize: "0.75rem", opacity: 0.85 }}>
                {user.email}
              </Typography>
            </Box>
          </Box>

          {/* LOGOUT */}
          <Button
            onClick={logout}
            sx={{
              px: 3,
              py: 1,
              fontWeight: 600,
              borderRadius: 3,
              color: "#fff",
              background: "rgba(255,255,255,0.25)",
              "&:hover": {
                background: "rgba(255,255,255,0.35)",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
