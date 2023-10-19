import "./userList.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Breadcrumbs,
  Button,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import * as React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TablePagination from "@mui/material/TablePagination";
import Checkbox from "@mui/material/Checkbox";
import EditNoteIcon from "@mui/icons-material/EditNote";
import IosShareIcon from "@mui/icons-material/IosShare";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Arrow from "../../assets/Arrow-payslip.png";
import profile from "../../assets/profile2.png";
import Circle from "../../assets/circle-menu.svg";

import ClearIcon from "@mui/icons-material/Clear";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const emails = ["username@gmail.com", "user02@gmail.com"];
const data = [
  {
    Title: "Amanda Omar",
    Role: "UI/UX designer",
    Assigned: "revamp website",
    Status: "Active",
    avatars: [
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
    ],
  },
  {
    Title: "Amanda Omar",
    Role: "UI/UX designer",
    Assigned: "revamp website",
    Status: "Active",
    avatars: [
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
    ],
  },
  {
    Title: "Amanda Omar",
    Role: "UI/UX designer",
    Assigned: "revamp website",
    Status: "Active",
    avatars: [
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
    ],
  },
  {
    Title: "Amanda Omar",
    Role: "UI/UX designer",
    Assigned: "revamp website",
    Status: "Active",
    avatars: [
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
    ],
  },
  {
    Title: "Amanda Omar",
    Role: "UI/UX designer",
    Assigned: "revamp website",
    Status: "Active",
    avatars: [
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
    ],
  },
  {
    Title: "Amanda Omar",
    Role: "UI/UX designer",
    Assigned: "revamp website",
    Status: "Active",
    avatars: [
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
    ],
  },
  {
    Title: "Amanda Omar",
    Role: "UI/UX designer",
    Assigned: "revamp website",
    Status: "Active",
    avatars: [
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
    ],
  },
];

function getColorForStatus(status) {
  switch (status) {
    case "Active":
      return "blue";
    case "offline":
      return "red";
    default:
      return "black";
  }
}
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

//EDIT USER
function EditUser(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div>
        <div className="NewUserHead">
          <DialogTitle>
            <div className="NewUserHeader">
              <p>Edit User</p>
              <Button style={{ color: "#000" }}>
                <ClearIcon onClick={handleClose}></ClearIcon>
              </Button>
            </div>
          </DialogTitle>
          <DialogContent className="Container-1">
            <div className="Dialog-textfield">
              <p>First Name *</p>
              <TextField
                id="outlined-size-small"
                defaultValue="Amanda"
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
                defaultValue=" omar"
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
                defaultValue="amanda@gmail.com"
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
                defaultValue=" +91-9876543210"
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
                defaultValue=""
                size="small"
                style={{
                  width: "350px",
                }}
              ></TextField>
            </div>
            <div className="switches">
              <p>Social Profile</p>
              <Switch {...label} />
            </div>
          </DialogContent>
          <DialogContent className="Container3">
            <div className="Filter-Buttons">
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
      </div>
    </Dialog>
  );
}

EditUser.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const UserList = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpageChange] = useState(5);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = (event) => {
    rowperpageChange(+event.target.value);
    pagechange(0);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className="table">
          <TableHead className="thead">
            <TableRow className="thead1">
              <Checkbox className="theadcheckbox" {...label} />
              <TableCell className="tableCell">
                <div className="TableHead">
                  Name
                  <img src={Arrow} alt="arrow" className="arrow" />
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="TableHead">
                  Role
                  <img src={Arrow} alt="arrow" className="arrow" />
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="TableHead"></div>
                Assigned
                <img src={Arrow} alt="arrow" className="arrow" />
              </TableCell>
              <TableCell className="tableCell">
                <div className="TableHead">
                  Status
                  <img src={Arrow} alt="arrow" className="arrow" />
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="TableHead">
                  Action
                  <img src={Arrow} alt="arrow" className="arrow" />
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowperpage, page * rowperpage + rowperpage)
              .map((row, index) => (
                <TableRow className="tablerow" key={index}>
                  <Checkbox className="Checkbox" {...label} />
                  <TableCell className="titlecontent" id="profile">
                    <div className="Profile">
                      <img src={profile} alt="profile" />
                      {row.Title}
                    </div>
                  </TableCell>
                  <TableCell className="clientcontent">
                    <div className="Profile">
                      {row.Role}
                      <img src={Circle} alt="profile" />
                    </div>
                  </TableCell>
                  <TableCell className="titlecontent">{row.Assigned}</TableCell>
                  <TableCell className="statuscontent">
                    <div className="Profile">
                      <span style={{ color: getColorForStatus(row.Status) }}>
                        {row.Status}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="iconscontent">
                    <MailOutlineOutlinedIcon className="icons" color="A200" />
                    <PhoneOutlinedIcon className="icons" color="error" />
                    <EditNoteIcon
                      className="icons"
                      color="success"
                      onClick={handleClickOpen}
                    />
                    <EditUser
                      selectedValue={selectedValue}
                      open={open}
                      onClose={handleClose}
                    />
                    <IosShareIcon className="icons" color="secondary" />
                    <MoreHorizOutlinedIcon className="icons" color="default" />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        rowsPerPage={rowperpage}
        page={page}
        count={data.length}
        component="div"
        onPageChange={handlechangepage}
        onRowsPerPageChange={handleRowsPerPage}
      ></TablePagination>
    </div>
  );
};

export default UserList;
