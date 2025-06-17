import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const { setUser } = useAppContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Simulate authentication
    setUser({ name: "John Doe", email });
    navigate("/user-data");
  };

  return (
    <Box
      sx={{
        maxWidth: 360,
        margin: "auto",
        padding: 2,
        bgcolor: "#f9f9f9",
        borderRadius: 2,
        mt: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={1}>
        PopX account
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </Typography>

      <TextField
        required
        fullWidth
        label="Email Address"
        placeholder="Enter email address"
        margin="normal"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        required
        fullWidth
        label="Password"
        placeholder="Enter password"
        type="password"
        margin="normal"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3, bgcolor: "#8000ff", "&:hover": { bgcolor: "#7000e0" } }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
