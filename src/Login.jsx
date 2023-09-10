import { Box } from "@mui/material";
import React from "react";
import "./Login.css";
import Logo from "./assets/Logo.png";
import doo1 from "./assets/doodles/Vector_4[1].png";
import doo2 from "./assets/doodles/Vector_16[1].png";
import doo3 from "./assets/doodles/Vector_17[1].png";
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
            padding: "10px",
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
            paddingTop: "60px",
          }}
        >
          <div className="Box">
              <Box className="Field">
                <p>Sign in to your account</p>
                <div className="Field1" style={{ textAlign: "center",
                width: "350px" }}>
                  <h4
                    style={{
                      textAlign: "left",
                      width: "60px",
                      marginTop: "10px",
                      marginLeft: "-1px",
                    }}
                  >
                    Email
                  </h4>
                  <TextField
                  className="textfield"
                    label="Admin@gmail.com"
                    variant="outlined"
                  />
                </div>

                <div className="Field1" style={{ textAlign: "center", width: "350px" }}>
                  <h4
                    style={{
                      textAlign: "left",
                      width: "60px",
                      marginTop: "30px",
                      marginLeft: "-1px",
                    }}
                  >
                    Password
                  </h4>
                  <TextField
                    className="textfield"
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
                      style={{ background: "#ec3d50", width: "350px",height:"50px",borderRadius:"10px" }}
                    >
                      Login as Admin
                    </Button>
                  </div>
                  <div className="login-btn">
                    <Button
                      variant="contained"
                      style={{ background: "#ec3d50", width: "350px",height:"50px",borderRadius:"10px"  }}
                    >
                      Login as Team Manager
                    </Button>
                  </div>
                  <div className="login-btn">
                    <Button
                      variant="contained"
                      style={{ background: "#ec3d50", width: "350px",height:"50px",borderRadius:"10px"  }}
                    >
                      Login in as Developer
                    </Button>
                  </div>
                  <div className="login-btn">
                    <Button
                      variant="contained"
                      style={{ background: "#ec3d50", width: "350px",height:"50px",borderRadius:"10px"  }}
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
      <img className="doodle1" src={doo1}/>
      <img className="doodle2" src={doo2}/>
      <img className="doodle3" src={doo3}/>
    </div>
    
    
  
    );
};

export default Login;


