import "./LeadsHeading.css";
import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

//ADD LEADS
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div>
        <div className="LeadHead">
          <DialogTitle>
            <div className="LeadHeader">
              <p>Add Lead</p>
              <Button style={{ color: "#000" }}>
                <ClearIcon onClick={handleClose}></ClearIcon>
              </Button>
            </div>
          </DialogTitle>
        </div>
        <DialogContent className="Lead-Container1">
          <div className="Dialog-textfield">
            <p>Lead Title *</p>
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
            <p>Telephone</p>
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
            <p>Email Address</p>
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
            <p>Lead Value $</p>
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
            <p>Assigned</p>
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
            <p>Status *</p>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              size="small"
              multiple
              value={personName}
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
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </div>
        </DialogContent>

        <DialogContent className="Container3">
          <div className="switches">
            <p>Details</p>
            <Switch {...label} />
          </div>
          <div className="switches">
            <p>More Information</p>
            <Switch {...label} />
          </div>
          <div className="switches">
            <p>Address & Organization Details</p>
            <Switch {...label} />
          </div>
          <div>
            <p style={{ fontSize: "12px", color: "grey" }}>*Required</p>
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

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

//FILTER LEADS
function FilterLeads(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div>
        <div className="DialogHead">
          <DialogTitle>
            <div className="DialogHeader">
              <p>Filter Lead</p>
              <Button style={{ color: "#000" }}>
                <ClearIcon onClick={handleClose}></ClearIcon>
              </Button>
            </div>
          </DialogTitle>
        </div>
        <DialogContent className="Container-1">
          <div>
            <p>Assigned Users</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "450px",
              }}
            ></TextField>
          </div>
          <div>
            <p>Status</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "450px",
              }}
            ></TextField>
          </div>
          <div>
            <p>Date Added</p>
            <div className="Date">
              <TextField
                id="outlined-size-small"
                defaultValue="Start"
                size="small"
              ></TextField>
              <TextField
                id="outlined-size-small"
                defaultValue="End"
                size="small"
              ></TextField>
            </div>
          </div>
          <div>
            <p>Last Contact</p>
            <div className="Date">
              <TextField
                id="outlined-size-small"
                defaultValue="Start"
                size="small"
              ></TextField>
              <TextField
                id="outlined-size-small"
                defaultValue="End"
                size="small"
              ></TextField>
            </div>
          </div>
          <div>
            <p>Value</p>
            <div className="Date">
              <TextField
                id="outlined-size-small"
                defaultValue="Minimum"
                size="small"
              ></TextField>
              <TextField
                id="outlined-size-small"
                defaultValue="Maximum"
                size="small"
              ></TextField>
            </div>
          </div>
          <div>
            <p>Tags</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "450px",
              }}
            ></TextField>
          </div>
          <div>
            <p>Show</p>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              size="small"
              multiple
              value={personName}
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
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <p>Brand Name</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "450px",
              }}
            ></TextField>
          </div>
          <div>
            <p>Content Brief</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "450px",
              }}
            ></TextField>
          </div>
          <div>
            <p>Preffered Void</p>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              size="small"
              multiple
              value={personName}
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
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
            <div>
              <p>Target Date</p>
              <TextField
                id="outlined-size-small"
                defaultValue=" "
                size="small"
                style={{
                  width: "450px",
                }}
              ></TextField>
            </div>
            <div>
              <p>Total Budget</p>
              <TextField
                id="outlined-size-small"
                defaultValue=" "
                size="small"
                style={{
                  width: "450px",
                }}
              ></TextField>
            </div>
          </div>
        </DialogContent>
        <DialogContent className="Container3">
          <div className="Filter-Buttons">
            <Button
              style={{
                color: "#000",
                border: "1px solid black",
              }}
              onClick={handleClose}
            >
              Restart
            </Button>
            <Button style={{ color: "#000", border: "1px solid black" }}>
              Apply Filter
            </Button>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}

FilterLeads.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const LeadsHeading = () => {
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
          <Button style={{ color: "#000" }} onClick={handleClickOpenFilter}>
            <FilterAltOutlinedIcon
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </Button>
          <FilterLeads
            selectedValue={selectedValue}
            open={FilterOpen}
            onClose={handleCloseFilter}
          />
        </div>

        <Button
          className="superadminleads-addproject"
          variant="outlined"
          onClick={handleClickOpen}
        >
          + Add Leads
        </Button>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </div>
    </div>
  );
};

export default LeadsHeading;
