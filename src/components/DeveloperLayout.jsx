import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import { Button, colors } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
// import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
// import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import { green, pink, teal } from "@mui/material/colors";
import profile2 from "../assets/profile2.png";
import SettingsIcon from "@mui/icons-material/Settings";
import proicon from "../assets/proicon.svg";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import taskicon from "../assets/taskicon.svg";
// import logo from "../assets/logo.svg";
// import clients from "../assets/clients.svg";
// import leads from "../assets/leads.svg";
// import payslip from "../assets/payslip.svg";
// import user from "../assets/user.svg";
import "./DashLayout.css";
// import Superadminpayslip from "../features/Superadmin-payslip/Superadminpayslip";
// import SuperadminUser from "../features/SuperAdmin-User/SuperadminUser";
// import SuperadminClient from "../features/SuperAdmin-Client/SuperadminClient";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import clock from "../assets/clock.svg";
import lock from "../assets/lock.svg";
import user from "../assets/user.svg";
import ClearIcon from "@mui/icons-material/Clear";
import UpdatePasswordImg from "../assets/updatePassword.svg";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Switch,
  TextField,
} from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const label = { inputProps: { "aria-label": "Switch demo" } };

// UPDATE PROFILE
function UpdateMyProfile(props) {
  const { onClose, selectedValue, open } = props;

  const handleCloseProjectInfo = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleCloseProjectInfo} open={open}>
      <div className="ProfileInfoDialog">
        <div>
          <DialogTitle>
            <div className="DialogHeader">
              <p> Update My Profile</p>
              <Button style={{ color: "#000" }}>
                <ClearIcon onClick={handleCloseProjectInfo}></ClearIcon>
              </Button>
            </div>
          </DialogTitle>
        </div>
        <DialogContent className="Container-1">
          <div className="Dialog-textfield">
            <p>First Name*</p>
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
            <p>Last Name*</p>
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
            <p>Email Address*</p>
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
            <p>position</p>
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
            <p>Social Profile</p>
            <Switch {...label} />
          </div>
        </DialogContent>
        <DialogContent>
          <div className="Buttons">
            <Button
              style={{
                color: "#000",
                border: "1px solid black",
                width: "50px",
              }}
              onClick={handleCloseProjectInfo}
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

//UPDATE PASSWORD
function UpdatePassword(props) {
  const { onClose, selectedValue, open } = props;

  const handleClosePaswordUpdate = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog onClose={handleClosePaswordUpdate} open={open}>
      <div>
        <div className="password-nav">
          <DialogTitle>
            <div className="DialogHeader">
              <p> Update Password</p>
              <Button style={{ color: "#000" }}>
                <ClearIcon onClick={handleClosePaswordUpdate}></ClearIcon>
              </Button>
            </div>
          </DialogTitle>

          <DialogContent className="Container-1">
            <div>
              <img src={UpdatePasswordImg} alt="X" className="password-x" />
            </div>
            <div className="Password-TextField">
              <p>Change Your password. Minimum of 6 characters </p>
              <TextField
                id="outlined-size-small"
                defaultValue="Password"
                size="small"
                style={{
                  width: "500px",
                }}
              ></TextField>
            </div>
            <br></br>
            <div>
              <TextField
                id="outlined-size-small"
                defaultValue="Confirm Password"
                size="small"
                style={{
                  width: "500px",
                }}
              ></TextField>
            </div>
          </DialogContent>
          <DialogContent>
            <div className="Buttons">
              <Button
                style={{
                  color: "#000",
                  border: "1px solid black",
                  width: "50px",
                }}
                onClick={handleClosePaswordUpdate}
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

// const settings = ["Profile", "Account", "Dashboard", "Logout"];
export default function MiniDrawer() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const [openProjectInfo, setOpenProjectInfo] = React.useState(false);
  const [openPasswordUpdate, setopenPasswordUpdate] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(false);

  const handleClickOpenProjectInfo = () => {
    setOpenProjectInfo(true);
  };
  const handleClickOpenPasswordUpdate = () => {
    setopenPasswordUpdate(true);
  };

  const handleCloseProjectInfo = (value) => {
    setOpenProjectInfo(false);
    setSelectedValue(value);
  };
  const handleClosePasswordUpdate = (value) => {
    setopenPasswordUpdate(false);
    setSelectedValue(value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline style={{ color: pink }} />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Task Management
          </Typography> */}
          <div className="acontainer">
            <Box sx={{ flexGrow: 0 }}>
              <IconButton>
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <SettingsIcon />
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src={profile2} alt="profile" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* <MenuItem  onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem  onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Account</Typography>
                  </MenuItem>
                  <MenuItem  onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={()=> navigate("/")}>Logout</Typography>
                  </MenuItem> */}
                <div className="profileinfo-maindiv">
                  <div>
                    <div className="profileinfo-topcard">
                      <div id="profileinfo-Pfofile">
                        <img
                          src={profile2}
                          alt="Karmadev"
                          className="profileinfo-Profile"
                        />
                      </div>
                      <div className="profileinfo-profile2">
                        <div className="profileinfo-username">
                          <h3>Steven Mallet</h3>{" "}
                        </div>
                        <div className="profileinfo-usermail">
                          {" "}
                          <p>amanda@gmail.com</p>
                        </div>
                        <button onClick={handleClickOpenProjectInfo} className="profileinfo-Button">Edit</button>
                        <UpdateMyProfile
                          selectedValue={selectedValue}
                          open={openProjectInfo}
                          onClose={handleCloseProjectInfo}
                        />
                      </div>
                    </div>
                    <div className="profileinfo-bottomcard">
                      <MenuItem onClick={handleCloseUserMenu}>
                        <img
                          src={user}
                          alt="karmadev"
                          className="profileinfo-user"
                        />
                        <Typography
                          textAlign="center"
                          onClick={handleClickOpenProjectInfo}
                        >
                          Update My Profile
                        </Typography>
                        <UpdateMyProfile
                          selectedValue={selectedValue}
                          open={openProjectInfo}
                          onClose={handleCloseProjectInfo}
                        />
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <img
                          src={clock}
                          alt="karmadev"
                          className="profileinfo-clock"
                        />
                        <Typography
                          textAlign="center"
                          onClick={() =>
                            navigate("/developer-dashboard/timesheets")
                          }
                        >
                          My Time Sheets
                        </Typography>
                      </MenuItem>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <img
                          src={lock}
                          alt="karmadev"
                          className="profileinfo-lock"
                        />
                        <Typography
                          textAlign="center"
                          onClick={handleClickOpenPasswordUpdate}
                        >
                          Update Password
                        </Typography>
                        <UpdatePassword
                          selectedValue={selectedValue}
                          open={openPasswordUpdate}
                          onClose={handleClosePasswordUpdate}
                        />
                      </MenuItem>
                    </div>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => navigate("/")}
                      >
                        Logout
                      </Typography>
                    </MenuItem>
                  </div>
                </div>
              </Menu>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {/* <img src={logo} alt="Karmadev.in" style={{morgin:'3px',padding:"5px"}}/> */}
          <h2
            style={{ paddingRight: "10px", fontFamily: "Roboto, sans-serif" }}
          >
            <b>Karmadev.in</b>
          </h2>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          {/* Default Dashboard */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color: teal["A700"],
                borderrighttopradius: "10px",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardRoundedIcon
                  sx={{
                    color: teal["A700"],
                    height: "32px",
                    width: "32px",
                  }}
                  onClick={() => navigate("/developer-dashboard")}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Developer"}
                sx={{ opacity: open ? 1 : 0 }}
                onClick={() => navigate("/developer-dashboard")}
              />
            </ListItemButton>
          </ListItem>

          {/* Task */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color: teal["A700"],
              }}
              onClick={() => navigate("/developer-dashboard/tasks")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  src={taskicon}
                  alt="taskIcon"
                  style={{ color: green, height: "28px", width: "32px" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Tasks"}
                sx={{ opacity: open ? 1 : 0 }}
                onClick={() => navigate("/developer-dashboard/tasks")}
              />
            </ListItemButton>
          </ListItem>

          {/* Projects */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color: teal["A700"],
              }}
              onClick={() => navigate("/developer-dashboard/projects")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  src={proicon}
                  alt="projects"
                  style={{ color: green, height: "28px", width: "32px" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Projects"}
                sx={{ opacity: open ? 1 : 0 }}
                onClick={() => navigate("/developer-dashboard/projects")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box className="dash-layout" component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Outlet />
      </Box>
    </Box>
  );
}
