import "./PayslipHeader.css";
import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import Reload from "../../assets/reload.svg";
import Grid from "../../assets/grid.svg";
import Download from "../../assets/download.svg";

const PayslipHeader = () => {
  return (
    <div className="heading">
      <div className="head-content1">
        <h4>PAYSLIP</h4>
        <Box className="box">
          <Breadcrumbs
            className="breadcrumbs"
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link underline="hover" color="rgb(159, 165, 165)" href="#">
              SUPER ADMIN
            </Link>
            <Typography className="typography">PAYSLIPS</Typography>
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
        <Button className="addproject"> + New Payslip</Button>
      </div>
    </div>
  )
};

export default PayslipHeader;
