import React from "react";
import "./DeveloperHeader.css";
import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const DeveloperHeader = () => {
  return (
    <div className="heading">
      <div className="head-content1">
        <h4>Developer</h4>
        <Box className="box">
          <Breadcrumbs
            className="breadcrumbs"
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link underline="hover" color="rgb(159, 165, 165)" href="#">
              TEAM MANAGER
            </Link>
            <Typography className="typography">DEVELOPER</Typography>
          </Breadcrumbs>
        </Box>
      </div>
      {/* <div className="head-content2">
        <Button className="addproject">+ Add Developer</Button>
      </div> */}

    </div>
  );
};

export default DeveloperHeader;
