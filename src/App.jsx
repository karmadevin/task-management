import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import { Paper } from "@mui/material";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
// import Public from "./components/Public";
import DashLayout from "./components/DashLayout";
import SuperAdminProjects from "./features/superAdminProject/SuperAdminProjects";
import SuperAdminTasks from "./features/superAdminTask/SuperAdminTasks";
import SuperAdminPayslip from "./features/superAdminPayslip/SuperAdminPayslip";
import SuperAdminLeads from "./features/superAdminLeads/SuperAdminLeads";
import SuperAdminClient from "./features/superAdminClient/SuperAdminClient";
import SuperAdminUser from "./features/superAdminUser/SuperAdminUser";
import SuperAdminDashboard from "./features/superAdminDashboard/SuperAdminDashboard";
// import DeveloperDashboard from "./features/developerDashboard/developerDashboard";
// import DeveloperProject from "./features/developerProject/developerProjects";
// import DeveloperTask from "./features/developerTask/developerTasks";
function App() {
  return (
    <Paper elevation={0} style={{ Height: "100vh", borderRadius: "0px" }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          {/* <Route index element={<Public />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />

          {/* Private Routes */}
          <Route path="dashboard" element={<DashLayout />}>
            <Route index element={<SuperAdminDashboard/>} />

            <Route path="projects" element={<SuperAdminProjects />} />
            <Route path="tasks" element={<SuperAdminTasks />} />
            <Route path="payslip" element={<SuperAdminPayslip />} />
            <Route path="leads" element={<SuperAdminLeads />} />
            <Route path="clients" element={<SuperAdminClient />} />
            <Route path="users" element={<SuperAdminUser />} />
          </Route>
        </Route>
      </Routes>
    </Paper>
  );
}

export default App;
