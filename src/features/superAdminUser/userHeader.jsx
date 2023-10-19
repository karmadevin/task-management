import "./userHeader.css";
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

//ADD USER
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
      <div className="DialogUser">
        <div className="UserHead">
          <DialogTitle>
            <div className="UserHeader">
              <p>Create A New User</p>
              <Button style={{ color: "#000" }}>
                <ClearIcon onClick={handleClose}></ClearIcon>
              </Button>
            </div>
          </DialogTitle>
        </div>
        <DialogContent className="Container-1">
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
            <p>Position</p>
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


const UserHeader = () => {
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
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          className="addproject"
        >
          + Add User
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

export default UserHeader;
