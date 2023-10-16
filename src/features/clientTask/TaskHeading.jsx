import "./TaskHeading.css";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


const TaskHeading = () => {
  return (
    <div className="superadmintask-heading">
      <div className="superadmintask-head-content1">
        <h2>Tasks</h2>
        <Box className="superadmintask-box">
          <Breadcrumbs
            className="superadmintask-breadcrumbs"
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link underline="hover" color="rgb(159, 165, 165)" href="#">
              CLIENTS
            </Link>
            <Typography className="superadmintask-typography">TASKS</Typography>
          </Breadcrumbs>
        </Box>
      </div>
    </div>
  );
};

export default TaskHeading;
