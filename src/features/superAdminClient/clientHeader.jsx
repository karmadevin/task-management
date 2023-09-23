import React from "react";
import "./ClientHeader.css";
import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import Reload from "../../assets/reload.svg";
import Grid from "../../assets/grid.svg";
import Download from "../../assets/download.svg";

const ClientHeader = () => {
  return (
    <div className="heading">
      <div className="head-content1">
        <h4>CLIENTS</h4>
        <Box className="box">
          <Breadcrumbs
            className="breadcrumbs"
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link underline="hover" color="rgb(159, 165, 165)" href="#">
              SUPER ADMIN
            </Link>
            <Typography className="typography">CLIENTS</Typography>
          </Breadcrumbs>
        </Box>
      </div>
      <div className="head-content2">
        <div className="search">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <input type="text" placeholder="search" />
        </div>
        <div className="profileIcon">
          <img src={Reload} alt="reload" />
        </div>
        <div className="profileIcon">
          <img src={Grid} alt="menu" />
        </div>
        <div className="profileIcon">
          <img src={Download} alt="download" />
        </div>
        <Button className="addproject">+ Add Client</Button>
      </div>
    </div>
  );
};

export default ClientHeader;
