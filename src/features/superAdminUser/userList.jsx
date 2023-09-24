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
import Arrow from "../../assets/Arrow-payslip.png";
import "./userList.css";
import profile from "../../assets/profile2.png";
import Circle from "../../assets/circle-menu.svg";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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

const UserList = () => {
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
                    <EditNoteIcon className="icons" color="success" />
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
