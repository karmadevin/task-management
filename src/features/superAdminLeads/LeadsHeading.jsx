import React from "react";
import "./LeadsHeading.css";
import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const LeadsHeading = () => {
  return (
    <div className="superadminleads-heading">
      <div className="superadminleads-head-content1">
        <h2>Leads</h2>
        <Box className="superadminleads-box">
          <Breadcrumbs
            className="superadminleads-breadcrumbs"
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link underline="hover" color="rgb(159, 165, 165)" href="#">
              SUPER ADMIN
            </Link>
            <Typography className="superadminleads-typography">
              LEADS
            </Typography>
          </Breadcrumbs>
        </Box>
      </div>
      <div className="superadminleads-head-content2">
        <div className="superadminleads-search">
          <div className="superadminleads-searchIcon">
            <SearchIcon />
          </div>
          <input type="text" placeholder="search" />
        </div>
        <div className="superadminleads-profileIcon">
          <Person2OutlinedIcon />
        </div>
        <div className="superadminleads-profileIcon">
          <FileDownloadOutlinedIcon />
        </div>
        <div className="superadminleads-profileIcon">
          <FilterAltOutlinedIcon />
        </div>

        <Button className="superadminleads-addproject">+ Add Project</Button>
      </div>
      <div></div>
    </div>
  );
};

export default LeadsHeading;
