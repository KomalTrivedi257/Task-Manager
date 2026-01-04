import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/signup", form);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#98C6E8",
        p: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 5,
          borderRadius: 4,
          background: "rgba(255,255,255,0.25)",
          backdropFilter: "blur(14px)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 3,
            fontWeight: 600,
            color: "#073763",
          }}
        >
          Create Account
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* NAME */}
          <TextField
            fullWidth
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            sx={{
              mb: 2,
              background: "rgba(255,255,255,0.18)",
              borderRadius: 2,
            }}
            InputProps={{
              style: { color: "#073763", fontWeight: 500 },
            }}
          />

          {/* EMAIL */}
          <TextField
            fullWidth
            placeholder="Email address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            sx={{
              mb: 2,
              background: "rgba(255,255,255,0.18)",
              borderRadius: 2,
            }}
            InputProps={{
              style: { color: "#073763", fontWeight: 500 },
            }}
          />

          {/* PASSWORD */}
          <TextField
            fullWidth
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            sx={{
              mb: 3,
              background: "rgba(255,255,255,0.18)",
              borderRadius: 2,
            }}
            InputProps={{
              style: { color: "#073763" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "#073763" }} />
                    ) : (
                      <Visibility sx={{ color: "#073763" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* BUTTON */}
          <Button
            type="submit"
            fullWidth
            sx={{
              py: 1.5,
              fontWeight: 600,
              borderRadius: 3,
              background:
                "linear-gradient(90deg,#2196f3,#64b5f6)",
              color: "#fff",
              "&:hover": {
                background:
                  "linear-gradient(90deg,#1976d2,#4dabf5)",
                transform: "translateY(-1px)",
              },
            }}
          >
            Signup
          </Button>
        </form>

        <Typography
          mt={3}
          sx={{ textAlign: "center", color: "#073763" }}
        >
          Already have an account?{" "}
          <Link
            to="/"
            style={{
              color: "#064f9c",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signup;
