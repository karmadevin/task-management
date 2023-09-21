import Login from "./Login";
import MiniDrawer from "./components/Sidenav";
import { Paper } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Paper elevation={0} style={{ Height: "100vh", borderRadius: "0px" }}>
      <div className="App">
        {/* <Login /> */}
        <MiniDrawer />
      </div>
    </Paper>
  );
}

export default App;


