import React from "react";
import "./userHeader.css";
import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const UserHeader = () => {
  return (
    <div className="heading">
      <div className="head-content1">
        <h4>USER</h4>
        <Box className="box">
          <Breadcrumbs
            className="breadcrumbs"
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link underline="hover" color="rgb(159, 165, 165)" href="#">
              SUPER ADMIN
            </Link>
            <Typography className="typography">USER</Typography>
          </Breadcrumbs>
        </Box>
      </div>
      <div className="head-content2">
        <Button className="addproject">+ Add User</Button>
      </div>

    </div>
  );
};

export default UserHeader;
