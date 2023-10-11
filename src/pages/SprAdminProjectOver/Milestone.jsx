import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import Checkbox from "@mui/material/Checkbox";
import EditNoteIcon from "@mui/icons-material/EditNote";
import IosShareIcon from "@mui/icons-material/IosShare";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import Arrow from "../../assets/Arrow-payslip.png";
import "./Milestone.css";
// import profile from "../../assets/profile2.png";
// import Circle from "../../assets/circle-menu.svg";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const data = [
  {
    Title: "Design",
    Alltasks: 1,
    pendingtasks: 1,
    completedtasks: 0},
    {
        Title: "Planning",
        Alltasks: 0,
        pendingtasks: 0,
        completedtasks: 0},{
            Title: "Development",
            Alltasks: 2,
            pendingtasks: 2,
            completedtasks: 0},{
                Title: "Testing",
                Alltasks: 0,
                pendingtasks: 0,
                completedtasks: 0},{
                    Title: "Uncategorized",
                    Alltasks: 0,
                    pendingtasks: 0,
                    completedtasks: 0},
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

const Milestone = () => {
  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = (event) => {
    rowperpageChange(+event.target.value);
    pagechange(0);
  };

  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpageChange] = useState(5);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className="table">
          <TableHead className="thead">
            <TableRow className="thead1">
                {/* <DragIndicatorIcon className="theadcheckbox"></DragIndicatorIcon> */}
              {/* <Checkbox className="theadcheckbox" {...label} /> */}
              <div></div>
              <TableCell className="tableCell">
                Name
                {/* <img src={Arrow} alt="arrow" className="arrow" /> */}
              </TableCell>
              <TableCell className="tableCell">
                All tasks
                {/* <img src={Arrow} alt="arrow" className="arrow" /> */}
              </TableCell>
              <TableCell className="tableCell">
                Pending tasks
                {/* <img src={Arrow} alt="arrow" className="arrow" /> */}
              </TableCell>
              <TableCell className="tableCell">
                Completed tasks
                {/* <img src={Arrow} alt="arrow" className="arrow" /> */}
              </TableCell>
              <TableCell className="tableCell">
                Action
                {/* <img src={Arrow} alt="arrow" className="arrow" /> */}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow className="tablerow" key={index}>
                <DragIndicatorIcon className="Checkbox"></DragIndicatorIcon>
                {/* <Checkbox className="Checkbox" {...label} /> */}
                <TableCell className="titlecontent" id="profile">
                  {/* <img src={profile} alt="profile" /> */}
                  {row.Title}
                </TableCell>
                <TableCell className="clientcontent">
                  {row.Alltasks}
                  {/* <img src={Circle} alt="profile" /> */}
                </TableCell>
                <TableCell className="titlecontent">{row.pendingtasks}</TableCell>
                <TableCell >
                  <span >
                    {row.completedtasks}
                  </span>
                </TableCell>
                <TableCell className="iconscontent">
                  {/* <MailOutlineOutlinedIcon className="icons" color="A200" />
                  <PhoneOutlinedIcon className="icons" color="error" /> */}
                  
                  <DeleteOutlineIcon  size="large" color="error"></DeleteOutlineIcon>
                  <EditNoteIcon  color="success" size="large"></EditNoteIcon>
                 
                  
                  {/* <IosShareIcon className="icons" color="secondary" />
                  <MoreHorizOutlinedIcon className="icons" color="default" /> */}
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

export default Milestone;
