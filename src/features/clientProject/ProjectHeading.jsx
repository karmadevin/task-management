import "./ProjectHeading.css";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


const ProjectHeading = () => {
  return (
    <div className="superadminproject-heading">
      <div className="superadminproject-head-content1">
        <h2>Project</h2>
        <Box className="superadminproject-box">
          <Breadcrumbs
            className="superadminproject-breadcrumbs"
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link underline="hover" color="rgb(159, 165, 165)" href="#">
              CLIENTS
            </Link>
            <Typography className="superadminproject-typography">
              PROJECTS
            </Typography>
          </Breadcrumbs>
        </Box>
      </div>
    </div>
  );
};

export default ProjectHeading;
