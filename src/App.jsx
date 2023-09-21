import Login from "./Login";
import { Paper } from "@mui/material";
import "./App.css";
import Sidenav from "../src/Components/Sidenav";

import Superadminprojects from "./Pages/super-admin-project/Superadminprojects";

function App() {
  return (
    <Paper elevation={0} style={{ Height: "100vh", borderRadius: "0px" }}>
      <div className="App">
      <Sidenav/>
      
        {/* <Superadminprojects/> */}
      </div>
    </Paper>
  );
}

export default App;


