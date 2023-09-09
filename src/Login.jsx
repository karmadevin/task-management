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
      <div>
        <Box
          sx={{
            padding: "40px",
          }}
        >
          <div className="LogoImage">
            <img src={Logo} alt="Logo" className="Logo" />
            <p>Welcome To The KarmaDev.in !</p>
            <img src={HeroImage} alt="HeroImage" className="Hero" />
          </div>
        </Box>
      </div>

      <div className="Container">
        <Box
          sx={{
            padding: "50px",
          }}
        >
          <div className="Box">
              <Box className="Field">
                <p>Sign in to your account</p>
                <div style={{ textAlign: "center", width: "420px" }}>
                  <h5
                    style={{
                      textAlign: "left",
                      width: "60px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                  >
                    Email
                  </h5>
                  <TextField
                    id="outlined-basic"
                    label="Admin@gmail.com"
                    variant="outlined"
                  />
                </div>

                <div style={{ textAlign: "center", width: "420px" }}>
                  <h5
                    style={{
                      textAlign: "left",
                      width: "60px",
                      marginLeft: "5px"
                    }}
                  >
                    Password
                  </h5>
                  <TextField
                    id="outlined-basic"
                    label="Enter Your Password"
                    variant="outlined"
                  />
                  <div className="alignment">
                    <h6>
                      Remember me <Checkbox {...label} />
                    </h6>
                    <h6>Forgot Password?</h6>
                  </div>
                </div>

                <div className="Login-Btns">
                  <div className="login-btn">
                    <Button
                      variant="contained"
                      style={{ background: "#ec3d50", width: "419px" }}
                    >
                      Login as Admin
                    </Button>
                  </div>
                  <div className="login-btn">
                    <Button
                      variant="contained"
                      style={{ background: "#ec3d50", width: "419px" }}
                    >
                      Login as Team Manager
                    </Button>
                  </div>
                  <div className="login-btn">
                    <Button
                      variant="contained"
                      style={{ background: "#ec3d50", width: "419px" }}
                    >
                      Login in as Developer
                    </Button>
                  </div>
                  <div className="login-btn">
                    <Button
                      variant="contained"
                      style={{ background: "#ec3d50", width: "419px" }}
                    >
                      Login as Client
                    </Button>
                  </div>
                </div>
              </Box>
          </div>
          <h3 className="copyright">Copyright @2023KarmaDev.in.</h3>
        </Box>
      </div>
    </div>
  );
};

export default Login;
