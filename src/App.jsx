import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import { Paper } from "@mui/material";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
// import Public from "./components/Public";
import DashLayout from "./components/DashLayout";
import SuperAdminProjects from "./features/super-admin-project/SuperAdminProjects";
import SuperAdminTasks from "./features/super-admin-task/SuperAdminTasks";
import SuperAdminPayslip from "./features/super-admin-payslip/SuperAdminPayslip";
import SuperAdminLeads from "./features/super-admin-leads/SuperAdminLeads";
import SuperAdminClient from "./features/super-admin-client/SuperAdminClient";
import SuperAdminUser from "./features/super-admin-user/SuperAdminUser";

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
            <Route index element={<SuperAdminProjects />} />

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
