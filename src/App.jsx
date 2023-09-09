import Login from "./Login";
import { Paper } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Paper elevation={0} style={{ minHeight: "100vh", borderRadius: "0px" }}>
      <div className="App">
        <Login />
      </div>
    </Paper>
  );
}

export default App;
