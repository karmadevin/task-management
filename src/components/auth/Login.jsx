import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./Login.css";
import Logo from "../../assets/Logo.png";
import doo1 from "../../assets/doodles/Vector_4[1].png";
import doo2 from "../../assets/doodles/Vector_16[1].png";
import doo3 from "../../assets/doodles/Vector_17[1].png";
import HeroImage from "../../assets/HeroImage.svg";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const FormValidationSchema = yup.object({
    email: yup
      .string()
      .email()
      .min(6, <p style={{ fontSize: "11px", justifyContent: "left", marginLeft: "-50px"}}>Enter Valid Email</p>)
      .required(<p style={{ fontSize: "11px", justifyContent: "left", marginLeft: "-50px" }}>Email is required</p>),
    password: yup
      .string()
      .required(<p style={{ fontSize: "11px", justifyContent: "left", marginLeft: "-50px" }}>Please enter a password</p>)
      .min(
        8,
        <p style={{ fontSize: "11px", justifyContent: "left", marginLeft: "-50px" }}>
          Password must have at least 8 characters
        </p>
      )
      .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/, {
        message: <p style={{ fontSize: "11px", justifyContent: "left", marginLeft: "-50px" }}>Invalid password</p>,
      }),
  });

  const { handleSubmit, values, handleChange, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: FormValidationSchema,
      onSubmit: (values) => {
        console.log("onSubmit =", values);
      },
    });

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
                    variant="outlined"
                    label="Admin@gmail.com"
                    onChange={handleChange}
                    value={values.email}
                    error={touched.email && errors.email ? true : false}
                    helperText={
                      touched.email && errors.email ? errors.email : ""
                    }
                  />
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
                    onChange={handleChange}
                    value={values.password}
                    className="textfield"
                    label="Enter Your Password"
                    variant="outlined"
                    error={touched.password && errors.password ? true : false}
                    helperText={
                      touched.password && errors.password ? errors.password : ""
                    }
                  />

                  <div className="alignment">
                    <h6>
                      Remember me
                      <Checkbox {...label} />
                    </h6>
                    <a href="#">Forgot Password?</a>
                  </div>
                </div>

                <div className="Login-Btns">
                  <div className="login-btn">
                    <Link to="/dashboard" >
                      <Button
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
                    </Link>
                  </div>
                  <div className="login-btn">
                    <a href="#">
                      <Button
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
              </form>
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
