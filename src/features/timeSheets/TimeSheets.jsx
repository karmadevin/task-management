import * as React from "react";
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
import "./TimeSheets.css";
import fliter from "../../assets/fliter.svg";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import Arrowpayslip from "../../assets/Arrowpayslip.svg";
import ClearIcon from "@mui/icons-material/Clear";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";

import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ReplayIcon from "@mui/icons-material/Replay";
import DeleteIcon from "@mui/icons-material/Delete";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const label = { inputProps: { "aria-label": "Switch demo" } };

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

const namesTask = [
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
function getStylesTask(namesTask, personNameTask, themeTask) {
  return {
    fontWeight:
      personNameTask.indexOf(namesTask) === -1
        ? themeTask.typography.fontWeightRegular
        : themeTask.typography.fontWeightMedium,
  };
}

//ADD TIMESHEET
function AddTimeRecord(props) {
  const { onClose, selectedValue, open } = props;
  const theme = useTheme();
  const themeTask = useTheme();

  const handleCloseTimeRecord = () => {
    onClose(selectedValue);
  };
  const [personName, setPersonName] = React.useState([]);
  const [personNameTask, setPersonNameTask] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeTask = (event) => {
    const {
      target: { value },
    } = event;
    setPersonNameTask(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Dialog onClose={handleCloseTimeRecord} open={open}>
      <div>
        <div className="Dialog-Head">
          <DialogTitle>
            <div className="DialogHeader">
              <p>Record your work time</p>
              <Button style={{ color: "#000" }}>
                <ClearIcon onClick={handleCloseTimeRecord}></ClearIcon>
              </Button>
            </div>
          </DialogTitle>
        </div>
        <DialogContent className="Container-1">
        <div className="Dialogtextfield">
            <p>My Projects</p>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              size="small"
              multiple
              value={personName}
              onChange={handleChange}
              MenuProps={MenuProps}
              style={{
                width: "435px",
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
        <div className="Dialogtextfield">
            <p>My Tasks</p>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              size="small"
              multiple
              value={personNameTask}
              onChange={handleChangeTask}
              MenuProps={MenuProps}
              style={{
                width: "435px",
              }}
            >
              {namesTask.map((namesTask) => (
                <MenuItem
                  key={namesTask}
                  value={namesTask}
                  style={getStylesTask(namesTask, personNameTask, themeTask)}
                >
                  {namesTask}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="Dialogtextfield">
            <p>Date</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "435px",
              }}
            ></TextField>
          </div>
          <div className="Time-Date">
            <TextField
              id="outlined-size-small"
              defaultValue="Hrs"
              size="small"
            ></TextField>
            <TextField
              id="outlined-size-small"
              defaultValue="Mins"
              size="small"
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
              onClick={handleCloseTimeRecord}
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

//FILTER TIMESHEET
function FilterTimeRecord(props) {
  const { onClose, selectedValue, open } = props;

  const handleCloseTimeRecordFilter = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleCloseTimeRecordFilter} open={open}>
      <div className="Dialog-Filter">
        <div className="DialogHead">
          <DialogTitle>
            <div className="DialogHeader">
              <p>Filter Projects</p>
              <Button style={{ color: "#000" }}>
                <ClearIcon onClick={handleCloseTimeRecordFilter}></ClearIcon>
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

function TimeSheets() {
  const [open, setOpen] = React.useState(false);
  const [TimeSheetFilterOpen, SetTimeSheetFilterOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(false);

  const handleClickOpenTimeRecord = () => {
    setOpen(true);
  };

  const handleCloseTimeRecord = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleClickOpenTimeRecoreFilter = () => {
    SetTimeRecordFilterOpen(true);
  };

  const handleCloseTimeRecordFilter = (value) => {
    SetTimeRecordFilterOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <div className="heading">
        <div className="head-content1">
          <h4>Time Sheets</h4>
          <Box className="box">
            <Breadcrumbs
              className="breadcrumbs"
              aria-label="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
              sx={{ display: "flex" }}
            >
              <Link underline="hover" color="rgb(159, 165, 165)" href="#">
                DEVELOPER
              </Link>
              <Typography className="typography">Time Sheets</Typography>
            </Breadcrumbs>
          </Box>
        </div>
        <div className="head-content2">
          <div className="time-button-group">
            <div className="search">
              <div className="searchIcon">
                <SearchIcon />
              </div>
              <input type="text" placeholder="search" />
            </div>
            <div className="Time-filter">
              <img src={fliter} alt="filter" />
            </div>
            <Button
              className="add-time-record"
              onClick={handleClickOpenTimeRecord}
            >
              + Add Time Record
            </Button>
            <AddTimeRecord
              selectedValue={selectedValue}
              open={open}
              onClose={handleCloseTimeRecord}
            />
          </div>
        </div>
      </div>
      <div className="time-head-content">
        <Checkbox />
        <div className="head-content">
          <p>User</p>
          <img src={Arrowpayslip} alt="Arrow" />
        </div>
        <div className="head-content">
          <p>Task</p>
          <img src={Arrowpayslip} alt="Arrow" />
        </div>
        <div className="head-content">
          <p>Project</p>
          <img src={Arrowpayslip} alt="Arrow" />
        </div>
        <div className="head-content">
          <p>Date</p>
          <img src={Arrowpayslip} alt="Arrow" />
        </div>
        <div className="head-content">
          <p>NotInvoiced</p>
          <img src={Arrowpayslip} alt="Arrow" />
        </div>
        <div className="head-content">
          <p>Time</p>
          <img src={Arrowpayslip} alt="Arrow" />
        </div>
        <div className="head-content">
          <p>Action</p>
          <img src={Arrowpayslip} alt="Arrow" />
        </div>
      </div>
      <div>
        <div className="time-body-content">
          <Checkbox />
          <div className="Time-avatar-content">
            <Avatar sx={{ height: "25px", width: "25px" }} />
            <p>Rajesh</p>
          </div>
          <p className="Time-Task-content">application</p>
          <p className="Time-project-content">project</p>
          <p className="Time-date-content">DD/MM/YYYY</p>
          <p className="Time-invoiced-content">NotInvoiced</p>
          <p className="Time-time-content">00:00:00</p>

          <div className="time-btn-content">
            <ToggleButtonGroup size="small" aria-label="Small sizes">
              <PauseCircleOutlineIcon className="superadminproject-icons" />
            </ToggleButtonGroup>
            <ToggleButtonGroup size="small" aria-label="Small sizes">
              <EditNoteIcon className="superadminproject-icons" />
            </ToggleButtonGroup>
            <ToggleButtonGroup size="small" aria-label="Small sizes">
              <ReplayIcon className="superadminproject-icons" />
            </ToggleButtonGroup>
            <ToggleButtonGroup size="small" aria-label="Small sizes">
              <DeleteIcon className="superadminproject-icons" />
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
      <div className="time-body-content">
        <Checkbox />
        <div className="Time-avatar-content">
          <Avatar sx={{ height: "25px", width: "25px" }} />
          <p>Rajesh</p>
        </div>
        <p className="Time-Task-content">application</p>
        <p className="Time-project-content">project</p>
        <p className="Time-date-content">DD/MM/YYYY</p>
        <p className="Time-invoiced-content">NotInvoiced</p>
        <p className="Time-time-content">00:00:00</p>

        <div className="time-btn-content">
          <ToggleButtonGroup size="small" aria-label="Small sizes">
            <PauseCircleOutlineIcon className="superadminproject-icons" />
          </ToggleButtonGroup>
          <ToggleButtonGroup size="small" aria-label="Small sizes">
            <EditNoteIcon className="superadminproject-icons" />
          </ToggleButtonGroup>
          <ToggleButtonGroup size="small" aria-label="Small sizes">
            <ReplayIcon className="superadminproject-icons" />
          </ToggleButtonGroup>
          <ToggleButtonGroup size="small" aria-label="Small sizes">
            <DeleteIcon className="superadminproject-icons" />
          </ToggleButtonGroup>
        </div>
      </div>
    </>
  );
}

export default TimeSheets;
