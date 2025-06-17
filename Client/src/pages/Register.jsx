import * as React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Register = () => {
  const { setUser } = useAppContext();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email) {
      alert("Please fill all required fields.");
      return;
    }

    // Update global user context with name & email
    setUser({ name: formData.fullName, email: formData.email });

    // Redirect to Userdata page
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
      <Typography variant="h5" fontWeight="bold" mb={2}>
        PopX account
      </Typography>

      <TextField
        required
        fullWidth
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        required
        fullWidth
        label="Phone number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        required
        fullWidth
        label="Email address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        required
        fullWidth
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Company name"
        name="company"
        value={formData.company}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />

      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <FormLabel
          component="legend"
          sx={{ color: "#000", fontSize: "14px", mb: 1 }}
        >
          Are you an Agency?*
        </FormLabel>
        <RadioGroup
          row
          name="isAgency"
          value={formData.isAgency}
          onChange={handleChange}
        >
          <FormControlLabel
            value="yes"
            control={
              <Radio
                sx={{
                  color: "#8000ff",
                  "&.Mui-checked": { color: "#8000ff" },
                }}
              />
            }
            label="Yes"
          />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        sx={{ mt: 3, bgcolor: "#8000ff", "&:hover": { bgcolor: "#7000e0" } }}
      >
        Create Account
      </Button>
    </Box>
  );
};

export default Register;
