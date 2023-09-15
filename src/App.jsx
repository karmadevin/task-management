import Login from "./Login";
import { Paper } from "@mui/material";
import "./App.css";
import Sidenav from "../src/Components/Sidenav";

function App() {
  return (
    <Paper elevation={0} style={{ Height: "100vh", borderRadius: "0px" }}>
      <div className="App">
      <Sidenav/>
        
      </div>
    </Paper>
  );
}

export default App;
