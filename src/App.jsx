import { Paper } from "@mui/material";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <Paper elevation={4} style={{ minHeight:"100vh", borderRadius: "0px"}}>
      <div className="App">
        <Home/>
      </div>
    </Paper>
  );
}

export default App;
