import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  LinearProgress,
  TablePagination,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import EditNoteIcon from "@mui/icons-material/EditNote";
import IosShareIcon from "@mui/icons-material/IosShare";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useNavigate } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import "./ProjectList.css";


const data = [
  {
    id: 1,
    Title: "Mobile Banking App",
    Client: "House& Home",
    DueDate: "13-9-2023",
    progress: 10,
    Status: "Pending",
    avatars: [
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
    ],
  },
  {
    id: 1,
    Title: "Mobile Banking App",
    Client: "House& Home",
    DueDate: "13-9-2023",
    progress: 30,
    Status: "Completed",
    avatars: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
    ],
  },
  {
    id: 1,
    Title: "Mobile Banking App",
    Client: "House& Home",
    DueDate: "13-9-2023",
    progress: 60,
    Status: "In-Progress",
    avatars: [
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
    ],
  },
  {
    id: 1,
    Title: "Mobile Banking App",
    Client: "House& Home",
    DueDate: "13-9-2023",
    progress: 90,
    Status: "Completed",
    avatars: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
    ],
  },
  {
    id: 1,
    Title: "Mobile Banking App",
    Client: "House& Home",
    DueDate: "13-9-2023",
    progress: 55,
    Status: "In-Progress",
    avatars: [
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
    ],
  },
  {
    id: 1,
    Title: "Mobile Banking App",
    Client: "House& Home",
    DueDate: "13-9-2023",
    progress: 38,
    Status: "Pending",
    avatars: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
    ],
  },
  {
    id: 1,
    Title: "Mobile Banking App",
    Client: "House& Home",
    DueDate: "13-9-2023",
    progress: 95,
    Status: "Completed",
    avatars: [
      "https://s3.ivisa.com/website-assets/blog/hungary-photo-size-requirements.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNNcQfBQd0_DLK0odTFHKQUcTjAVYigfY_A&usqp=CAU",
      "https://m.media-amazon.com/images/I/51oTVlqzzLL._AC_UF894,1000_QL80_.jpg",
    ],
  },
];

function getColorForStatus(status) {
  switch (status) {
    case "Completed":
      return "green";
    case "In-Progress":
      return "orange";
    case "Pending":
      return "red";
    default:
      return "black";
  }
}

const ProjectList = () => {
  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = (event) => {
    rowperpageChange(+event.target.value);
    pagechange(0);
  };

  const navigate = useNavigate();
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpageChange] = useState(5);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className="superadminproject-table">
          <TableHead className="superadminproject-thead">
            <TableRow className="superadminproject-thead1">
              <Checkbox
                className="superadminproject-theadcheckbox"
                {...label}
              />
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowperpage, page * rowperpage + rowperpage)
              .map((row, index) => (
                <TableRow className="superadminproject-tablerow" key={index}>
                  <Checkbox className="superadminproject-Checkbox" {...label} />
                  <TableCell
                    className="superadminproject-id"
                    onClick={() =>
                      navigate("../../pages/Clientpages/ClientOverview.jsx")
                    }
                  >
                    {row.id}
                  </TableCell>
                  <TableCell className="superadminproject-titlecontent">
                    {row.Title}
                  </TableCell>
                  <TableCell className="superadminproject-clientcontent">
                    {row.Client}
                  </TableCell>
                  <TableCell className="superadminproject-datecontent">
                    {row.DueDate}
                  </TableCell>
                  <TableCell className="superadminproject-colorbarcontent">
                    <LinearProgress
                      variant="determinate"
                      value={row.progress}
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        "&.MuiLinearProgress-colorPrimary": {
                          backgroundColor: "lightgray",
                        },
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: row.progress < 50 ? "red" : "green", // Customize the progress bar color based on the progress value
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell className="superadminproject-pic">
                    {row.avatars.map((avatar, avatarIndex) => (
                      <Avatar
                        key={avatarIndex}
                        alt={`Avatar ${avatarIndex + 1}`}
                        src={avatar}
                      />
                    ))}
                  </TableCell>
                  <TableCell className="superadminproject-statuscontent">
                    <span style={{ color: getColorForStatus(row.Status) }}>
                      {row.Status}
                    </span>
                  </TableCell>
                  <TableCell className="superadminproject-iconscontent">
                    <EditNoteIcon
                      className="superadminproject-icons"
                      color="success"
                    />
                    <IosShareIcon
                      className="superadminproject-icons"
                      color="secondary"
                    />
                    <Person2OutlinedIcon
                      className="superadminproject-icons"
                      color="default"
                    />
                    <DeleteOutlineOutlinedIcon
                      className="superadminproject-icons"
                      color="error"
                    />
                    <MoreHorizOutlinedIcon
                      className="superadminproject-icons"
                      color="default"
                    />
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

export default ProjectList;
