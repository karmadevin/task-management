import React, { useState } from "react";
import "./Login.css";
//Assets imports
import Logo from "./assets/Logo.png";
import doo1 from "./assets/doodles/Vector_4[1].png";
import doo2 from "./assets/doodles/Vector_16[1].png";
import doo3 from "./assets/doodles/Vector_17[1].png";
import HeroImage from "./assets/HeroImage.svg";
//formik import
import { Formik } from "formik";
// Material UI Imports
import { TextField, Button, Checkbox, Alert, Stack, Box } from "@mui/material";

// Material UI Icon Imports
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import LoginIcon from "@mui/icons-material/Login";

const Login = () => {
  // Email Validation
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const [showPassword, setShowPassword] = React.useState(false);

  //Inputs
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [rememberMe, setRememberMe] = useState();

  // Inputs Errors
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Overall Form Validity
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  // Handles Display and Hide Password
  // const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // Label for Checkbox
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // Validation for onBlur Email
  const handleEmail = () => {
    console.log(isEmail(emailInput));
    if (!isEmail(emailInput)) {
      setEmailError(true);
      <p style={{color:"red"}}>Required</p>
      return;
    }

    setEmailError(false);
  };

  // Validation for onBlur Password
  const handlePassword = () => {
    if (
      !passwordInput ||
      passwordInput.length < 5 ||
      passwordInput.length > 20
    ) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);
  };

  //handle Submittion
  const handleSubmit = () => {
    setSuccess(null);
    //First of all Check for Errors

    // If Email error is true
    if (emailError || !emailInput) {
      setFormValid("Email is Invalid. Please Re-Enter");
      return;
    }

    // If Password error is true
    if (passwordError || !passwordInput) {
      setFormValid(
        "Password is set btw 5 - 20 characters long. Please Re-Enter"
      );
      return;
    }
    setFormValid(null);

    // Proceed to use the information passed
    console.log("Email : " + emailInput);
    console.log("Password : " + passwordInput);
    console.log("Remember : " + rememberMe);

    //Show Successfull Submittion
    setSuccess("Form Submitted Successfully");
  };

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
              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div
                      className="Field1"
                      style={{ textAlign: "center", width: "350px" }}
                    >
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
                        type="email"
                        name="email"
                        className="textfield"
                        label="Admin@gmail.com"
                        variant="outlined"
                        required
                        fullWidth
                        error={emailError}
                        value={emailInput}
                        InputProps={{}}
                        onBlur={handleEmail}
                        onChange={(event) => {
                          setEmailInput(event.target.value);
                        }}
                      />
                      {errors.email && touched.email && errors.email}
                    </div>

                    <div
                      className="Field1"
                      style={{ textAlign: "center", width: "350px" }}
                    >
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
                        name="password"
                        type="password"
                        fullWidth
                        error={passwordError}
                        onBlur={handlePassword}
                        InputProps={{}}
                        className="textfield"
                        label="Enter Your Password"
                        variant="outlined"
                        required
                        onChange={(event) => {
                          setEmailInput(event.target.value);
                        }}
                      />
                      {errors.password && touched.password && errors.password}

                      <div className="alignment">
                        <h6>
                          Remember me{" "}
                          <Checkbox
                            {...label}
                            size="small"
                            onChange={(event) =>
                              setRememberMe(event.target.checked)
                            }
                          />
                        </h6>
                        <a href="#">Forgot Password?</a>
                      </div>
                    </div>

                    <div className="Login-Btns">
                      <div className="login-btn">
                        <a href="#">
                          <Button
                            fullWidth
                            onClick={handleSubmit}
                            type="submit"
                            variant="contained"
                            style={{
                              background: "#ec3d50",
                              width: "350px",
                              height: "50px",
                              borderRadius: "10px",
                            }}
                          >
                            Login as Admin
                          </Button>
                        </a>
                      </div>
                      <div className="login-btn">
                        <a href="#">
                          <Button
                            fullWidth
                            onClick={handleSubmit}
                            type="submit"
                            variant="contained"
                            style={{
                              background: "#ec3d50",
                              width: "350px",
                              height: "50px",
                              borderRadius: "10px",
                            }}
                          >
                            Login as Team Manager
                          </Button>
                        </a>
                      </div>
                      <div className="login-btn">
                        <a href="#">
                          <Button
                            fullWidth
                            onClick={handleSubmit}
                            type="submit"
                            variant="contained"
                            style={{
                              background: "#ec3d50",
                              width: "350px",
                              height: "50px",
                              borderRadius: "10px",
                            }}
                          >
                            Login in as Developer
                          </Button>
                        </a>
                      </div>
                      <div className="login-btn">
                        <a href="#">
                          <Button
                            fullWidth
                            onClick={handleSubmit}
                            type="submit"
                            variant="contained"
                            style={{
                              background: "#ec3d50",
                              width: "350px",
                              height: "50px",
                              borderRadius: "10px",
                            }}
                          >
                            Login as Client
                          </Button>
                        </a>
                      </div>
                    </div>
                    {/* Show Form Error if any */}
                    {formValid && (
                      <Stack
                        sx={{ width: "100%", paddingTop: "10px" }}
                        spacing={2}
                      >
                        <Alert severity="error" size="small">
                          {formValid}
                        </Alert>
                      </Stack>
                    )}

                    {/* Show Success if no issues */}
                    {success && (
                      <Stack
                        sx={{ width: "100%", paddingTop: "10px" }}
                        spacing={2}
                      >
                        <Alert severity="success" size="small">
                          {success}
                        </Alert>
                      </Stack>
                    )}
                  </form>
                )}
              </Formik>
            </Box>
          </div>
          <h3 className="copyright">Copyright @2023KarmaDev.in.</h3>
        </Box>
      </div>
      <img className="doodle1" src={doo1} />
      <img className="doodle2" src={doo2} />
      <img className="doodle3" src={doo3} />
    </div>
  );
};

export default Login;
