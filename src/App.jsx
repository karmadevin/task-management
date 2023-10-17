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
import PaySlip from "./features/paySlip/PaySlip";
import SuperAdminLeads from "./features/superAdminLeads/SuperAdminLeads";
import SuperAdminClient from "./features/superAdminClient/SuperAdminClient";
import SuperAdminUser from "./features/superAdminUser/SuperAdminUser";
import SuperAdminDashboard from "./features/superAdminDashboard/SuperAdminDashboard";
import DeveloperLayout from "./components/DeveloperLayout";
import DeveloperDashboard from "./features/developerDashboard/developerDashboard";
import DeveloperProject from "./features/developerProject/developerProjects";
import DeveloperTask from "./features/developerTask/developerTasks";
import TeamManagerLayout from "./components/TeamManagerLayout";
import TeamManagerDashboard from "./features/teamManagerDashboard/TeamManagerDashboard";
import TeamManagerDeveloper from "./features/teamManagerDeveloper/TeamManagerDeveloper";
import TeamManagerProject from "./features/teamManagerProject/TeamManagerProject";
import TeamManagerTask from "./features/teamManagerTask/TeamManagerTask";
import ClientDashboard from "./features/clientDashBoard/ClientDashBoard";
import ClientProject from "./features/clientProject/ClientProjects";
import ClientTask from "./features/clientTask/ClientTasks";
import ClientLayout from "./components/ClientLayout";
import TimeSheets from "./features/timeSheets/TimeSheets";
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
          {/* Super Admin Routes */}
          <Route path="super-admin-dashboard" element={<DashLayout />}>
            <Route index element={<SuperAdminDashboard/>} />
            <Route path="projects" element={<SuperAdminProjects />} />
            <Route path="tasks" element={<SuperAdminTasks />} />
            <Route path="payslip" element={<SuperAdminPayslip />} />
            <Route path="leads" element={<SuperAdminLeads />} />
            <Route path="clients" element={<SuperAdminClient />} />
            <Route path="users" element={<SuperAdminUser />} />
            <Route path="newpayslip" element={<PaySlip/>} />
            <Route path="timesheets" element={<TimeSheets/>} />
          </Route>
          {/* Team Manager Dashbaord */}
          <Route path="manager-dashboard" element={<TeamManagerLayout/>}>
            <Route index element={<TeamManagerDashboard/>} />
            <Route path="users" element={<TeamManagerDeveloper/>} />
            <Route path="projects" element={<TeamManagerProject/>} />
            <Route path="tasks" element={<TeamManagerTask/>} />
            <Route path="timesheets" element={<TimeSheets/>} />
          </Route>
          {/* Developer Dashbaord */}
          <Route path="developer-dashboard" element={<DeveloperLayout/>}>
            <Route index element={<DeveloperDashboard/>} />
            <Route path="projects" element={<DeveloperProject/>} />
            <Route path="tasks" element={<DeveloperTask/>} />
            <Route path="timesheets" element={<TimeSheets/>} />
          </Route>
          {/* Client Dashbaord */}
          <Route path="client-dashboard" element={<ClientLayout/>}>
            <Route index element={<ClientDashboard/>} />
            <Route path="projects" element={<ClientProject/>} />
            <Route path="tasks" element={<ClientTask/>} />
            <Route path="timesheets" element={<TimeSheets/>} />
          </Route>
        </Route>
      </Routes>
    </Paper>
  );
}

export default App;
