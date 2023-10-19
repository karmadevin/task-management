import React, { useState } from "react";
import "./DragAndDrop.css";
import Person2Icon from "@mui/icons-material/Person2";
import AttachmentIcon from "@mui/icons-material/Attachment";
import MessageIcon from "@mui/icons-material/Message";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";

function DragAndDrop() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Mobile Banking App Development",
      description: "$4500.00",
      column: "New",
      avatars: [
        "https://img.freepik.com/free-photo/happy-young-businessman-walking-near-business-center_171337-19784.jpg",
        "https://media.istockphoto.com/id/1318482009/photo/young-woman-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=Jc1NcoUMoM78AxPTh9EApaPU2kXh2evb499JgW99b0g=",
      ],
    },
    {
      id: 2,
      title: "Mobile Banking App Development",
      description: "$4500.00",
      column: "Disqualified",
      avatars: [
        "https://img.freepik.com/free-photo/happy-young-businessman-walking-near-business-center_171337-19784.jpg",
        "https://media.istockphoto.com/id/1318482009/photo/young-woman-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=Jc1NcoUMoM78AxPTh9EApaPU2kXh2evb499JgW99b0g=",
      ],
    },
    {
      id: 3,
      title: "Mobile Banking App Development",
      description: "$4500.00",
      column: "Qualified",
      avatars: [
        "https://img.freepik.com/free-photo/happy-young-businessman-walking-near-business-center_171337-19784.jpg",
        "https://media.istockphoto.com/id/1318482009/photo/young-woman-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=Jc1NcoUMoM78AxPTh9EApaPU2kXh2evb499JgW99b0g=",
      ],
    },
    {
      id: 4,
      title: "Mobile Banking App Development",
      description: "$4500.00",
      column: "Contacted",
      avatars: [
        "https://img.freepik.com/free-photo/happy-young-businessman-walking-near-business-center_171337-19784.jpg",
        "https://media.istockphoto.com/id/1318482009/photo/young-woman-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=Jc1NcoUMoM78AxPTh9EApaPU2kXh2evb499JgW99b0g=",
      ],
    },
    {
      id: 5,
      title: "Mobile Banking App Development",
      description: "$4500.00",
      column: "New",
      avatars: [
        "https://img.freepik.com/free-photo/happy-young-businessman-walking-near-business-center_171337-19784.jpg",
        "https://media.istockphoto.com/id/1318482009/photo/young-woman-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=Jc1NcoUMoM78AxPTh9EApaPU2kXh2evb499JgW99b0g=",
      ],
    },
    {
      id: 6,
      title: "Mobile Banking App Development",
      description: "$4500.00",
      column: "Disqualified",
      avatars: [
        "https://img.freepik.com/free-photo/happy-young-businessman-walking-near-business-center_171337-19784.jpg",
        "https://media.istockphoto.com/id/1318482009/photo/young-woman-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=Jc1NcoUMoM78AxPTh9EApaPU2kXh2evb499JgW99b0g=",
      ],
    },
    {
      id: 7,
      title: "Mobile Banking App Development",
      description: "$4500.00",
      column: "Disqualified",
      avatars: [
        "https://img.freepik.com/free-photo/happy-young-businessman-walking-near-business-center_171337-19784.jpg",
        "https://media.istockphoto.com/id/1318482009/photo/young-woman-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=Jc1NcoUMoM78AxPTh9EApaPU2kXh2evb499JgW99b0g=",
      ],
    },
  ]);

  const columns = ["New", "Disqualified", "Qualified", "Contacted"];

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id.toString());
  };

  const handleDrop = (e, column) => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData("text/plain"));
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, column } : task
    );
    setTasks(updatedTasks);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* <h1>Kanban Board</h1> */}
      <div className="dcolumns">
        {columns.map((column) => (
          <div
            className="dcolumns-1"
            key={column}
            // className={`column ${column}`}
            onDrop={(e) => handleDrop(e, column)}
            onDragOver={(e) => allowDrop(e)}
          >
            <div className="dcardhead">
              <h2>{column.charAt(0).toUpperCase() + column.slice(1)}</h2>
              <div>
                <AddCircleOutlinedIcon />
              </div>
            </div>

            <div className="dcards">
              {tasks
                .filter((task) => task.column === column)
                .map((task) => (
                  <div
                    key={task.id}
                    className="dcard"
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                  >
                    <div className="tit-icon">
                      <h3>{task.title}</h3>
                      <MoreVertIcon />
                    </div>
                    <div className="Designer">UI/UX Designer</div>
                    <p className="dbuttondesc">{task.description}</p>
                    <div>
                      Telephone: <span>__ __ __</span>
                    </div>
                    <div>
                      Created: <span>20-09-2023</span>
                    </div>
                    <div>
                      Contacted: <span>20-09-2023</span>
                    </div>
                    <div>
                      Email: <span>-- -- --</span>
                    </div>
                    <div>
                      Content Type: <span>Unknown</span>
                    </div>
                    <div>
                      Target Date: <span>01-10-2023</span>
                    </div>
                    <div className="lastcontent">
                      <div className="lastcontent-icons5">
                        <AccountCircleRoundedIcon
                          style={{ color: "rgb(50,205,239)" }}
                        />
                        <StarOutlinedIcon style={{ color: "rgb(74,232,93)" }} />
                        <AttachmentIcon style={{ color: "rgb(160,160,162)" }} />
                        <MessageIcon style={{ color: "rgb(160,160,162)" }} />
                        <TaskOutlinedIcon
                          style={{ color: "rgb(160,160,162)" }}
                        />
                      </div>

                      <div className="lastcontent-pic">
                        {task.avatars.map((avatar, avatarIndex) => (
                          <Avatar
                            key={avatarIndex}
                            alt={`Avatar ${avatarIndex + 1}`}
                            src={avatar}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragAndDrop;
