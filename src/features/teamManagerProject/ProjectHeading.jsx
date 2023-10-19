import "./ProjectHeading.css";
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

//ADD PROJECT
function SimpleDialog(props) {
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
              <p>Create A New Project</p>
              <Button style={{ color: "#000" }}>
                <ClearIcon onClick={handleClose}></ClearIcon>
              </Button>
            </div>
          </DialogTitle>
        </div>
        <DialogContent className="Container1">
          <div className="Dialog-textfield">
            <p>Company Name</p>
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
            <p>First Name</p>
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
            <p>Last Name</p>
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
        </DialogContent>

        <DialogContent className="Container2">
          <div className="Dialog-textfield">
            <p>Project Title *</p>
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
            <p>Start Date *</p>
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
            <p>Deadline</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "350px",
              }}
            ></TextField>
          </div>
        </DialogContent>

        <DialogContent className="Container3">
          <div className="switches">
            <p>Description & Details</p>
            <Switch {...label} /*onClick={toggler} */ />
          </div>
          <div className="switches">
            <p>Category & Users</p>
            <Switch {...label} />
          </div>
          <div className="switches">
            <p>Additional Settings</p>
            <Switch {...label} />
          </div>
          <div className="switches">
            <p>Progress</p>
            <Switch {...label} />
          </div>
          <div className="switches">
            <p>More Information</p>
            <Switch {...label} />
          </div>
          <div>
            <p style={{ fontSize: "12px" }}>
              Show project after its been created
            </p>
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

//FILTER PROJECT
function FilterDialog(props) {
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
      <div className="Dialog-Filter">
        <div className="DialogHead">
          <DialogTitle>
            <div className="DialogHeader">
              <p>Filter Projects</p>
              <Button style={{ color: "#000" }}>
                <ClearIcon onClick={handleClose}></ClearIcon>
              </Button>
            </div>
          </DialogTitle>
        </div>
        <DialogContent className="Container-1">
          <div className="Client">
            <p>Client Name</p>
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
            <p>Assigned</p>
            <Box component="span" sx={{ p: 2 }} className="chip">
              <Chip
                label="Steven"
                size="small"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Box>
          </div>
          <div>
            <p>Start Date</p>
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
            <p>Due Date</p>
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
            <p>Tags</p>
            <Box component="span" sx={{ p: 2 }} className="chip">
              <Chip
                label="Graphical Designer"
                onClick={handleClick}
                onDelete={handleDelete}
              />
            </Box>
          </div>
          <div>
            <p>Category</p>
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
            <p>Show</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "450px",
              }}
            ></TextField>
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

FilterDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const ProjectHeading = () => {
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
    <div className="TeamManagerProject-heading">
      <div className="TeamManagerProject-head-content1">
        <h2>Project</h2>
        <Box className="TeamManagerProject-box">
          <Breadcrumbs
            className="TeamManagerProject-breadcrumbs"
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link underline="hover" color="rgb(159, 165, 165)" href="#">
              TEAM MANAGER
            </Link>
            <Typography className="TeamManagerProject-typography">
              PROJECTS
            </Typography>
          </Breadcrumbs>
        </Box>
      </div>
      <div className="TeamManagerProject-head-content2">
        <div className="TeamManagerProject-search">
          <div className="TeamManagerProject-searchIcon">
            <SearchIcon />
          </div>
          <input type="text" placeholder="search" />
        </div>
        <div className="TeamManagerProject-profileIcon">
          <Person2OutlinedIcon />
        </div>
        <div className="TeamManagerProject-profileIcon">
          <Button style={{ color: "#000" }} onClick={handleClickOpenFilter}>
            <FilterAltOutlinedIcon
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </Button>
          <FilterDialog
            selectedValue={selectedValue}
            open={FilterOpen}
            onClose={handleCloseFilter}
          />
        </div>
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          className="TeamManagerProject-addproject"
        >
          + Add Project
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

export default ProjectHeading;
