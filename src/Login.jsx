import { Box } from "@mui/material";
import React from "react";
import "./Login.css";
import Logo from "./assets/Logo.png";
import HeroImage from "./assets/HeroImage.svg";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  return (
    <div className="Login">
      <Box
        sx={{
          padding: "40px",
          width: "100%",
          height: "100%",
          bgcolor: "#F1F7Fd",
        }}
        className="Login"
      >
        <div className="App">
          <img src={Logo} alt="Logo" className="Logo" />
          <p>Welcome To The KarmaDev.in !</p>
          <img src={HeroImage} alt="HeroImage" className="Hero" />
        </div>

        <div className="Box">
          <Box className="Box1">
            <p>Sign in to your account</p>
            <div style={{ textAlign: "center", width: "420px" }}>
              <h5 style={{ textAlign: "left", width: "60px" }}>Email</h5>
              <TextField
                id="outlined-basic"
                label="Admin@gmail.com"
                variant="outlined"
                className="email"
              />
            </div>

            <div style={{ textAlign: "center", width: "420px" }}>
              <h5 style={{ textAlign: "left", width: "60px" }}>Password</h5>
              <TextField
                id="outlined-basic"
                label="Enter Your Password"
                variant="outlined"
                className="password"
              />
            </div>

            <div style={{ textAlign: "right" }} className="alignment">
              <h6>
                Remember me <Checkbox {...label} />
              </h6>
              <h6>Forgot Password?</h6>
            </div>

            <div>
              <div className="login-btn">
                <Button variant="container">Login as Admin</Button>
              </div>
              <div className="login-btn">
                <Button variant="container">Login as Team Manager</Button>
              </div>
              <div className="login-btn">
                <Button variant="container">Login in as Developer</Button>
              </div>
              <div className="login-btn">
                <Button variant="container">Login as Client</Button>
              </div>
            </div>
          </Box>
          <h3 className="copyright">Copyright @2023KarmaDev.in.</h3>
        </div>
      </Box>
    </div>
  );
};

export default Login;
