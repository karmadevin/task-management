import "./clientHeader.css";
import { Box, Breadcrumbs, Button, Link, Typography, TextField } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import Reload from "../../assets/reload.svg";
import Grid from "../../assets/grid.svg";
import Download from "../../assets/download.svg";

import * as React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ClearIcon from "@mui/icons-material/Clear";
import { blue } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const label = { inputProps: { "aria-label": "Switch demo" } };

const emails = ["username@gmail.com", "user02@gmail.com"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

//ADD CLIENT
function AddClient(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div>
        <div className="DialogHead">
          <DialogTitle>
            <div className="DialogHeader">
              <p>Add Client</p>
              <Button style={{ color: "#000" }}>
                <ClearIcon onClick={handleClose}></ClearIcon>
              </Button>
            </div>
          </DialogTitle>
        </div>
        <DialogContent className="Container1">
          <div className="Dialog-textfield">
            <p>Company Name *</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "350px",
              }}
            ></TextField>
          </div>
          <div className="Dialog-textfield">
            <p>First Name *</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "350px",
              }}
            ></TextField>
          </div>
          <div className="Dialog-textfield">
            <p>Last Name *</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "350px",
              }}
            ></TextField>
          </div>
          <div className="Dialog-textfield">
            <p>Email Address *</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "350px",
              }}
            ></TextField>
          </div>
          <div className="Client">
            <p>Category *</p>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              defaultValue="Default"
              size="small"
              // multiple
              // value={personName}
              onChange={handleChange}
              MenuProps={MenuProps}
              style={{
                width: "450px",
              }}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  // style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </div>
        </DialogContent>

        <DialogContent className="Container3">
          <div className="switches">
            <p>Description & Details</p>
            <Switch {...label} />
          </div>
          <div className="switches">
            <p>Billing Address</p>
            <Switch {...label} />
          </div>
          <div className="switches">
            <p>Shipping Address</p>
            <Switch {...label} />
          </div>
          <div className="switches">
            <p>App Modules</p>
            <Switch {...label} />
          </div>
          <div className="switches">
            <p>More Information</p>
            <Switch {...label} />
          </div>
          <div>
            <p style={{ fontSize: "12px" }}>*Required</p>
          </div>
          <div className="Buttons">
            <Button
              style={{
                color: "#000",
                border: "1px solid black",
                width: "50px",
              }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button style={{ color: "#000", border: "1px solid black" }}>
              Submit
            </Button>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}

AddClient.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const ClientHeader = () => {
  const [open, setOpen] = React.useState(false);
  const [FilterOpen, SetFilterOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleClickOpenFilter = () => {
    SetFilterOpen(true);
  };

  const handleCloseFilter = (value) => {
    SetFilterOpen(false);
    setSelectedValue(value);
  };

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
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          className="addproject"
        >
          + Add Client
        </Button>
        <AddClient
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </div>
    </div>
  );
};

export default ClientHeader;
